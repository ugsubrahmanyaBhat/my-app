'use client'

import { useState } from 'react'
import { BarChart2, Coins, Droplets, ImageIcon, Moon, PieChart, Eye, Wallet, User } from 'lucide-react'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: 'Dashboard',
    icon: BarChart2,
    href: '/dashboard'
  },
  {
    title: 'Tokens',
    icon: Coins,
    href: '/tokens'
  },
  {
    title: 'Pools',
    icon: Droplets,
    href: '/pools'
  },
  {
    title: 'NFTs',
    icon: ImageIcon,
    href: '/nfts',
    badge: 'NEW'
  },
  {
    title: 'LunarCrush',
    icon: Moon,
    href: '/lunar-crush'
  },
  {
    title: 'Analytics',
    icon: PieChart,
    href: '/analytics'
  },
  {
    title: 'Whale Watcher',
    icon: Eye,
    href: '/whale-watcher'
  },
  {
    title: 'My Portfolio',
    icon: Wallet,
    href: '/portfolio'
  },
  {
    title: 'Profile',
    icon: User,
    href: '/profile'
  }
]

export function MainSidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Sidebar 
      className="hidden md:flex border-r border-gray-800 bg-[#0B1929] text-gray-400 transition-all duration-300 ease-in-out"
      style={{ width: isHovered ? '200px' : '60px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarContent>
        <div className="mb-4 p-4 text-white">
          <Link href="/" className="flex items-center">
            <img 
              src="/placeholder.svg?height=32&width=32" 
              alt="STX Tools" 
              className="h-8 w-8"
            />
            {isHovered && <span className="ml-2 text-lg font-bold">STX Tools</span>}
          </Link>
        </div>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="relative group hover:bg-[#1A2A3A] hover:text-white transition-colors duration-200"
              >
                <Link href={item.href} className="flex items-center p-2">
                  <item.icon className="h-5 w-5" />
                  {isHovered && (
                    <>
                      <span className="ml-2">{item.title}</span>
                      {item.badge && (
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-md bg-emerald-500 text-white text-xs font-medium">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

