'use client'

import { Button } from "@/components/ui/button"
import { Wallet2 } from 'lucide-react'

export function TopNav() {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0B1929] border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">STXTools</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">BTC</span>
            <span>$101,042.69</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-500">STX</span>
            <span>$1.96</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-pink-500">LEO</span>
            <span>$0.000455</span>
          </div>
        </div>
      </div>
      <Button className="bg-[#00A4FF] hover:bg-[#0093E9]">
        <Wallet2 className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    </div>
  )
}

