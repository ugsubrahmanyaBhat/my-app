'use client'

import { useState } from 'react'
import { Star, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

const collections = [
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,
    

  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:20000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,
  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,

  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,

  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,

  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,

  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 5471,

  },
  {
    name: 'Stacked STX Token',
    icon: '/stx-icon.png',
    totalsupply:10000,
    volume1h: 36.91,
    volume6h: 147.06,
    volume1d: 2.15,
    volume7d: 2.15,
    volume30d: 2.15,
    volumealltime : 58.12,
    holders : 14057,
    secondsales: 14057,

  },
  // Add more token data as needed
]

export default function CollectionsPage() {
  const [search, setSearch] = useState('')
  

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(2)}k`
    }
    return `$${num.toFixed(2)}`
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
        
          </div>
          

          <div className="overflow-x-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800">
  <table className="table-auto w-full">
    <thead>
      <tr className="text-gray-500 text-sm border-b border-gray-800">
        <th className="text-left p-4">COLLECTION</th>
        <th className="text-right p-4">TOTAL SUPPLY</th>
        <th className="text-right p-4">VOLUME 1H(stx)</th>
        <th className="text-right p-4">VOLUME 6H(stx)</th>
        <th className="text-right p-4">VOLUME 1D(stx)</th>
        <th className="text-right p-4">VOLUME 7D(stx)</th>
        <th className="text-right p-4">VOLUME 30D(stx)</th>
        <th className="text-right p-4">VOLUME ALL TIME(stx)</th>
        <th className="text-right p-4">HOLDERS</th>
        <th className="text-right p-4">SECONDARY SALES</th>
      </tr>
    </thead>
    <tbody>
      {collections.map((nft, index) => (
        <tr
          key={index}
          className="border-b border-gray-800 hover:bg-[#1A2A3A] transition-colors"
        >
          <td className="px-4 py-3">
            <div className="flex items-center gap-2">
              <img src={nft.icon} alt={nft.name} className="h-6 w-6 rounded-full" />
              <span className="text-blue-400">{nft.name}</span>
            </div>
          </td>
          <td className="p-4 text-right text-orange-300">{formatNumber(nft.totalsupply)}</td>
          <td className="p-4 text-right text-gray-400">{formatNumber(nft.volume1h)}</td>
          <td className="p-4 text-right text-gray-400">{formatNumber(nft.volume6h)}</td>
          <td className="p-4 text-right text-gray-400">{formatNumber(nft.volume1d)}</td>
          <td className="p-4 text-right text-gray-400">{formatNumber(nft.volume7d)}</td>
          <td className="p-4 text-right text-blue-200">{formatNumber(nft.volume30d)}</td>
          <td className="p-4 text-right text-blue-600">{formatNumber(nft.volumealltime)}</td>
          <td className="p-4 text-right text-orange-300">{formatNumber(nft.holders)}</td>
          <td className="p-4 text-right text-orange-300">{formatNumber(nft.secondsales)}</td>
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