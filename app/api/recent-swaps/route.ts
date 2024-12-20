// app/api/transactions/route.ts
import { NextResponse } from 'next/server';
import { sql } from '../../../db/db';
import { stacksClient } from '@/lib/stacks';


export async function GET(request: Request) {
  try {
    // Get protocol from URL query params
    const { searchParams } = new URL(request.url);
    const protocol = searchParams.get('protocol');

    // Build protocol condition
    let protocolCondition = "";
    if (protocol) {
      protocolCondition = `AND dapps.id = '${protocol}'`;
    }

    // Query the database
    const result = await sql`
      SELECT
        dapps.id as protocol,
        tx_id
      FROM
        txs
      JOIN
        dapps ON txs.contract_call_contract_id = ANY (dapps.contracts)
      WHERE
        txs.type_id = 2
        ${sql.unsafe(protocolCondition)}
        AND canonical = TRUE
        AND microblock_canonical = TRUE
      ORDER BY
        block_height DESC,
        tx_index DESC
      LIMIT 50
    `;

    // Format the transaction IDs
    const formattedResult = result.map((r) => ({
      protocol: r.protocol,
      tx_id: `0x${r.tx_id.toString('hex')}`,
    }));

    // Fetch transaction details using stacksClient
    const { data } = await stacksClient.GET("/extended/v1/tx/multiple", {
      params: {
        query: { tx_id: formattedResult.map(r => r.tx_id) },
      },
    });

    // Combine protocol info with transaction details
    const transactions = formattedResult
      .map(r => {
        const txData = data[r?.tx_id];
        return txData?.found === true 
          ? { protocol: r.protocol, ...txData.result }
          : null;
      })
      .filter(tx => tx !== null);

    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}