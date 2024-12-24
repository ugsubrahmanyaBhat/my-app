'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wallet2, Search } from 'lucide-react'

export function TopNav() {
  return (
    <>
    <div className="flex flex-wrap items-center justify-between p-4 bg-[#0B1929] border-b border-gray-800">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        {/*<div className="text-2xl font-bold text-white">STXTools</div>*/}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">BTC</span>
            <span className="text-white">$101,042.69</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">STX</span>
            <span className="text-white">$1.96</span>
          </div>
          
        </div>
        </div>
        <div className="flex items-center space-x-4 w-full md:w-auto mr-4 ">
        <div className="relative flex-grow md:flex-grow-0">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-96 bg-[#1A2A3A] border-gray-700 text-white pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      
      
        <Button className="flex items-center space-x-2 bg-[#00A4FF] hover:bg-[#0093E9] whitespace-nowrap">
          <Wallet2 className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
        </Button>
        </div>
      </div>
      
      </>
    
  )
  
}
