"use client";
import { useState } from 'react';
import { gainers, losers } from '@/constants';

export function TopGainers() {
  const [dataType, setDataType] = useState<'gainers' | 'losers'>('gainers');
  const limitedData = (dataType === 'gainers' ? gainers : losers)
    .slice(0, 10)
    .sort((a: any, b: any) => b.metrics.price_change_1d - a.metrics.price_change_1d);

  return (
    <div className="p-4 bg-[#0B1929] overflow-hidden">
      <div className="flex items-center space-x-6 ">
        <select
          className="bg-[#1C293B] text-white text-sm font-medium whitespace-nowrap border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dataType}
          onChange={(e) => setDataType(e.target.value as 'gainers' | 'losers')}
        >
          <option className="bg-[#1C293B] text-white hover:bg-[#254061]" value="gainers">Top Gainers</option>
          <option className="bg-[#1C293B] text-white hover:bg-[#254061]" value="losers">Top Losers</option>
        </select>
        <div className="relative overflow-hidden w-full max-w-[1330px]">
          <div className="flex animate-marquee space-x-6">
            {limitedData.map((item, index) => (
              <GainerItem key={item.contract_id} item={item} index={index} isLosers={dataType === 'losers'} />
            ))}
            {limitedData.map((item, index) => (
              <GainerItem key={`${item.contract_id}-duplicate`} item={item} index={index} isLosers={dataType === 'losers'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GainerItem({ item, index, isLosers }: { item: any; index: number; isLosers: boolean }) {
  const changePercentage = item.metrics.price_change_1d;
  const displayPercentage = isLosers ? -changePercentage : changePercentage;
  
  return (
    <div className="flex items-center space-x-2 whitespace-nowrap">
      <span className="text-gray-500">#{index + 1}</span>
      <span>{item.symbol}</span>
      <span className={displayPercentage >= 0 ? "text-green-500" : "text-red-500"}>
        {displayPercentage.toFixed(2)}%
      </span>
    </div>
  );
}

