'use client'

import { useState } from 'react'
import { Star, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TradingPair {
  favorite: boolean
  platform: string
  pair: string
  tag: string
  subtext: string
  price: string
  change24h: string
  change7d: string
  change30d: string
  volume1h: string
  volume6h: string
  volume1d: string
  volume7d: string
  liquidity: string
  marketcap: string
}

const tradingPairs: TradingPair[] = [
  {
    favorite: false,
    platform: "BITFL",
    pair: "BITFL/STX",
    tag: "dc_stx",
    subtext: "BITFL_dc_stx",
    price: "$1.01",
    change24h: "+1.83%",
    change7d: "+2.63%",
    change30d: "+2.04%",
    volume1h: "$901.72",
    volume6h: "$18.16k",
    volume1d: "$22.40k",
    volume7d: "$129.05k",
    liquidity: "$5.02k",
    marketcap: "$129.05k"
  },
  {
    favorite: false,
    platform: "VELAR",
    pair: "aeUSDC/STX",
    tag: "dc_stx",
    subtext: "VELAR_dc_stx",
    price: "$1.01",
    change24h: "+1.40%",
    change7d: "+0.77%",
    change30d: "+1.72%",
    volume1h: "$23.43",
    volume6h: "$608.38",
    volume1d: "$799.19",
    volume7d: "$6.74k",
    liquidity: "$47.84k",
    marketcap: "$12.05k"
  },
  // Add more trading pairs as needed
]

const platforms = ["All Platforms", "BITFL", "VELAR", "ALEX"]
const pairs = ["All Pairs", "BITFL/STX", "aeUSDC/STX", "ALEX/STX"]

export function TradingPairsTable() {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms")
  const [selectedPair, setSelectedPair] = useState("All Pairs")

  return (
    <div className="bg-[#0B1929] rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-[#1A2A3A] text-white border-gray-700">
                {selectedPlatform} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {platforms.map((platform) => (
                <DropdownMenuItem key={platform} onSelect={() => setSelectedPlatform(platform)}>
                  {platform}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-[#1A2A3A] text-white border-gray-700">
                {selectedPair} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {pairs.map((pair) => (
                <DropdownMenuItem key={pair} onSelect={() => setSelectedPair(pair)}>
                  {pair}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">Min. Liquidity:</span>
          <input type="number" defaultValue={100} className="w-20 px-2 py-1 bg-[#1A2A3A] text-white border border-gray-700 rounded" />
          <Button variant="outline" className="bg-[#1A2A3A] text-white border-gray-700">
            Watchlist
          </Button>
          <Button variant="outline" className="bg-[#1A2A3A] text-white border-gray-700">
            Verified
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-800">
              <th className="text-left p-4"></th>
              <th className="text-left p-4">PLATFORM</th>
              <th className="text-left p-4">PAIR</th>
              <th className="text-right p-4">PRICE</th>
              <th className="text-right p-4">24H CHANGE</th>
              <th className="text-right p-4">7D CHANGE</th>
              <th className="text-right p-4">30D CHANGE</th>
              <th className="text-right p-4">1H VOLUME</th>
              <th className="text-right p-4">6H VOLUME</th>
              <th className="text-right p-4">1D VOLUME</th>
              <th className="text-right p-4">7D VOLUME</th>
              <th className="text-right p-4">LIQUIDITY</th>
              <th className="text-right p-4">MARKETCAP</th>
            </tr>
          </thead>
          <tbody>
            {tradingPairs.map((pair, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-[#1A2A3A]">
                <td className="p-4">
                  <Star className={`h-4 w-4 ${pair.favorite ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} />
                </td>
                <td className="p-4 text-white">{pair.platform}</td>
                <td className="p-4">
                  <div className="text-white">{pair.pair}</div>
                  <div className="text-xs text-gray-500">{pair.subtext}</div>
                </td>
                <td className="p-4 text-right text-white">{pair.price}</td>
                <td className="p-4 text-right" style={{ color: pair.change24h.startsWith('+') ? '#22c55e' : '#ef4444' }}>
                  {pair.change24h}
                </td>
                <td className="p-4 text-right" style={{ color: pair.change7d.startsWith('+') ? '#22c55e' : '#ef4444' }}>
                  {pair.change7d}
                </td>
                <td className="p-4 text-right" style={{ color: pair.change30d.startsWith('+') ? '#22c55e' : '#ef4444' }}>
                  {pair.change30d}
                </td>
                <td className="p-4 text-right text-white">{pair.volume1h}</td>
                <td className="p-4 text-right text-white">{pair.volume6h}</td>
                <td className="p-4 text-right text-white">{pair.volume1d}</td>
                <td className="p-4 text-right text-white">{pair.volume7d}</td>
                <td className="p-4 text-right text-white">{pair.liquidity}</td>
                <td className="p-4 text-right text-white">{pair.marketcap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  )
}

