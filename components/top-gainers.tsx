"use client";
import { gainers } from "@/constants";

export function TopGainers() {
  const limitedGainers = gainers.slice(0, 10);

  return (
    <div className="p-4 bg-[#0B1929] overflow-hidden">
      <div className="flex items-center space-x-6">
        <span className="text-sm font-medium whitespace-nowrap">Top Gainers</span>
        <div className="relative overflow-hidden w-full max-w-[1330px]">
          <div className="flex animate-marquee space-x-6">
            {limitedGainers.map((gainer, index) => (
              <div
                key={gainer.symbol}
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                <span className="text-gray-500">#{index + 1}</span>
                <span>{gainer.symbol}</span>
                <span className="text-green-500">{gainer?.metrics?.price_change_1d?.toFixed(2)}%</span>
              </div>
            ))}
            {limitedGainers.map((gainer, index) => (
              <div
                key={`${gainer.symbol}-duplicate`}
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                <span className="text-gray-500">#{index + 1}</span>
                <span>{gainer.symbol}</span>
                <span className="text-green-500">{gainer?.metrics?.price_change_1d?.toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}