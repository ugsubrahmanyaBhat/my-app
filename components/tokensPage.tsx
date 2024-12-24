'use client'

import { useState } from 'react'
import { Star, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

const tokens = [
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  {
    name: 'aBTC',
    symbol: 'aBTC',
    icon: '/btc-icon.png',
    verified: false,
    price: 94890.51,
    change24h: 0.22,
    change7d: -11.87,
    change30d: -3.14,
    marketCap: 70100000,
    volume1h: 0,
    volume6h: 33.77,
    volume1d: 217.22,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: false,
  },
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  {
    name: 'Stacked STX Token',
    symbol: 'stSTX',
    icon: '/stx-icon.png',
    verified: true,
    price: 1.78,
    change24h: 7.86,
    change7d: -22.83,
    change30d: -12.01,
    marketCap: 103170000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    Totalliquidity: 114.56,
    supply : 58.12,
    holders : 14057 ,
    swaps : 5471,
    deployed: 'a year ago',
    isWatchlisted: true,

  },
  // Add more token data as needed
]

export default function TokensPage() {
  const [search, setSearch] = useState('')
  const [minLiquidity, setMinLiquidity] = useState('1000')
  const [showWatchlist, setShowWatchlist] = useState(false)
  const [showVerified, setShowVerified] = useState(false)

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(2)}k`
    }
    return `$${num.toFixed(2)}`
  }

  const formatChange = (change: number) => {
    const formatted = change.toFixed(2)
    const isPositive = change > 0
    return (
      <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '+' : ''}{formatted}%
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B1929] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-transparent border-gray-800 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Min. Liquidity:</span>
            <Input
              type="number"
              value={minLiquidity}
              onChange={(e) => setMinLiquidity(e.target.value)}
              className="w-24 bg-transparent border-gray-800 text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Watchlist</span>
            <Switch
              checked={showWatchlist}
              onCheckedChange={setShowWatchlist}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Verified</span>
            <Switch
              checked={showVerified}
              onCheckedChange={setShowVerified}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        <table className="w-full">
          <thead>
          <tr className="text-gray-500 text-sm border-b border-gray-800">
              <th className="text-left p-4">TOKEN NAME</th>
              <th className="text-left p-4">SYMBOL</th>
              <th className="text-left p-4">PRICE</th>
              <th className="text-left p-4">24H CHANGE</th>
              <th className="text-left p-4">7D CHANGE</th>
              <th className="text-left p-4">30D CHANGE</th>
              <th className="text-left p-4">MARKET CAP</th>
              <th className="text-left p-4">1H VOLUME</th>
              <th className="text-left p-4">6H VOLUME</th>
              <th className="text-left p-4">1D VOLUME</th>
              <th className="text-left p-4">7D VOLUME</th>
              <th className="text-left p-4">TOTAL LIQUIDITY</th>
              <th className="text-left p-4">SUPPLY</th>
              <th className="text-left p-4">HOLDERS</th>
              <th className="text-left p-4">SWAPS</th>
              <th className="text-left p-4">DEPLOYED</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-800 hover:bg-[#1A2A3A] transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Star 
                      className={`h-4 w-4 cursor-pointer ${
                        token.isWatchlisted ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500'
                      }`}
                    />
                    <div className="flex items-center gap-2">
                      <img src={token.icon} alt={token.name} className="h-6 w-6 rounded-full" />
                      <span className="p-4 text-blue-400">{token.name}</span>
                      {token.verified && (
                        <span className="text-blue-800">✓</span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-blue-400">{token.symbol}</td>
                <td className="p-4 text-right text-purple-500">{formatNumber(token.price)}</td>
                <td className="p-4 text-right">{formatChange(token.change24h)}</td>
                <td className="p-4 text-right">{formatChange(token.change7d)}</td>
                <td className="p-4 text-right">{formatChange(token.change30d)}</td>
                <td className="p-4 text-right text-yellow-500">{formatNumber(token.marketCap)}</td>
                <td className="p-4 text-right text-gray-400">{formatNumber(token.volume1h)}</td>
                <td className="p-4 text-right text-gray-400">{formatNumber(token.volume6h)}</td>
                <td className="p-4 text-right text-gray-400">{formatNumber(token.volume1d)}</td>
                <td className="p-4 text-right text-gray-400">{formatNumber(token.volume7d)}</td>
                <td className="p-4 text-right text-blue-200">{formatNumber(token.Totalliquidity)}</td>
                <td className="p-4 text-right text-blue-600">{formatNumber(token.supply)}</td>
                <td className="p-4 text-right text-orange-300">{formatNumber(token.holders)}</td>
                <td className="p-4 text-right text-orange-500">{formatNumber(token.swaps)}</td>
                <td className="p-4 text-right text-gray-500">{token.deployed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">50 of 179 Results</div>
        <div className="flex items-center gap-2">
          <select className="bg-[#1A2A3A] text-white rounded px-3 py-1 text-sm border border-gray-700">
            <option>50</option>
            <option>100</option>
            <option>All</option>
          </select>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#1A2A3A] rounded text-sm text-white">1</span>
            <button className="px-3 py-1 text-sm text-gray-400 hover:text-white">Next →</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}