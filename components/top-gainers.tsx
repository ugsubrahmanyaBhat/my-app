'use client'



const gainers = [
  { rank: 3, symbol: 'MEGA', change: '+4.37%' },
  { rank: 4, symbol: 'XRP', change: '+3.45%' },
  { rank: 5, symbol: 'GOATSTX', change: '+2.70%' },
  { rank: 6, symbol: 'ALUX', change: '+1.96%' },
  { rank: 7, symbol: 'sUSDT', change: '+1.09%' },
  { rank: 8, symbol: 'WPS', change: '+0.96%' },
  { rank: 9, symbol: 'MANA', change: '+0.68%' },
  { rank: 10, symbol: 'BOB', change: '+0.54%' }
]

export function TopGainers() {
  return (
    <div className="p-4 bg-[#0B1929]">
      <div className="flex items-center space-x-6 overflow-x-auto">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Top Gainers</span>
          <span className="text-red-500">-15.49%</span>
        </div>
        {gainers.map((gainer) => (
          <div key={gainer.symbol} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-gray-500">#{gainer.rank}</span>
            <span>{gainer.symbol}</span>
            <span className="text-green-500">{gainer.change}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

