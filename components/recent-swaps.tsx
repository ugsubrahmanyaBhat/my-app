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
]

export function RecentSwaps() {
  return (
    <div className="bg-[#0B1929] p-4 rounded-lg">
      <h3 className="font-medium mb-4 text-gray-400 flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-purple-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 17l-4-4m0 0l-4-4m4 4h8m-8 0H4"
    />
  </svg>
  <span>Recent Swaps</span>
</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Additional components will be added here */}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4 text-gray-400">MAKER</th>
              <th className="text-left pb-4 text-gray-400">FROM</th>
              <th className="text-left pb-4 text-gray-400">TO</th>
              <th className="text-right pb-4 text-gray-400">VALUE</th>
              <th className="text-right pb-4 text-gray-400">DATE</th>
              <th className="text-right pb-4 text-gray-400">TXN</th>
            </tr>
          </thead>
          <tbody>
            {swaps.map((swap, i) => (
              <tr key={i} className="text-sm">
                <td className="py-2 text-blue-400">{swap.maker}</td>
                <td className="py-2 text-blue-400">{swap.from.symbol}</td>
                <td className="py-2 text-blue-400">{swap.to.symbol}</td>
                <td className="py-2 text-right text-bold text-green-400">{swap.from.value}</td>
                <td className="py-2 text-right text-gray-500">{swap.time}</td>
                <td className="py-2 text-right text-whiet">
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

