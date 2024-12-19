'use client'

import { ArrowRight } from 'lucide-react'

const swaps = [
  {
    maker: 'SPHSW...07KGN2',
    from: { symbol: 'STX', value: '$1.58' },
    to: { symbol: 'STX', value: '$1.58' },
    time: 'a minute ago',
  },
  {
    maker: 'SPPDR...3F5V8D',
    from: { symbol: 'aeUSDC', value: '$8.70' },
    to: { symbol: 'STX', value: '$8.70' },
    time: 'a minute ago',
  },
  {
    maker: 'SPPDR...3F5V8D',
    from: { symbol: 'LEO', value: '$8.59' },
    to: { symbol: 'aeUSDC', value: '$8.59' },
    time: 'a minute ago',
  },
  {
    maker: 'SP34P...S9VHHW',
    from: { symbol: 'STONE', value: '$76.35' },
    to: { symbol: 'STX', value: '$76.35' },
    time: '2 minutes ago',
  },
]

export function RecentSwaps() {
  return (
    <div className="bg-[#0B1929] p-4 rounded-lg">
      <h3 className="font-medium mb-4">Recent Swaps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Additional components will be added here */}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4">MAKER</th>
              <th className="text-left pb-4">FROM</th>
              <th className="text-left pb-4">TO</th>
              <th className="text-right pb-4 text-white">VALUE</th>
              <th className="text-right pb-4">DATE</th>
              <th className="text-right pb-4">TXN</th>
            </tr>
          </thead>
          <tbody>
            {swaps.map((swap, i) => (
              <tr key={i} className="text-sm">
                <td className="py-2">{swap.maker}</td>
                <td className="py-2">{swap.from.symbol}</td>
                <td className="py-2">{swap.to.symbol}</td>
                <td className="py-2 text-right text-white">{swap.from.value}</td>
                <td className="py-2 text-right">{swap.time}</td>
                <td className="py-2 text-right">
                  <ArrowRight className="inline h-4 w-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

