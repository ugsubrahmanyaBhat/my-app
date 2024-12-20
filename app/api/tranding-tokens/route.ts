// app/api/tokens/route.ts
import { NextResponse } from 'next/server';

interface TokenMetrics {
  contract_id: string;
  holder_count: number;
  swap_count: number;
  transfer_count: null;
  price_usd: number | null;
  price_change_1d: number;
  price_change_7d: number;
  price_change_30d: number;
  liquidity_usd: number;
  marketcap_usd: number | null;
  volume_1h_usd: number;
  volume_6h_usd: number;
  volume_1d_usd: number;
  volume_7d_usd: number;
}

interface Token {
  contract_id: string;
  symbol: string;
  name: string;
  decimals: number;
  description: string;
  circulating_supply: string;
  total_supply: string;
  image_url: string;
  tx_id: string;
  sender_address: string;
  block_height: number;
  deployed_at: number;
  enabled: boolean;
  header_image_url: string | null;
  verified: boolean;
  metrics: TokenMetrics;
}

interface TokenResponse {
  data: Token[];
  rowCount: number;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '0';
    const size = searchParams.get('size') || '10';
    const sort = searchParams.get('sort') || 'metrics_price_change_1d,desc';
    const minLiquidity = searchParams.get('minLiquidity') || '2500';

    const response = await fetch(
      `https://api.stxtools.io/tokens?page=${page}&size=${size}&sort=${sort}&minLiquidity=${minLiquidity}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch tokens');
    }

    const data: TokenResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching tokens:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tokens' },
      { status: 500 }
    );
  }
}