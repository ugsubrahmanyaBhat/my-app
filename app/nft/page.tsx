import { TopNav } from "@/components/top-nav"
import { TopGainers } from "@/components/top-gainers"
import { StatsCards } from "@/components/stats-cards"
import { PriceChart } from "@/components/price-chart"
import { RecentSwaps } from "@/components/recent-swaps"
import { TradingPairsTable } from "@/components/trading-pairs-table"
import { Footer } from "@/components/footer"
import { MainSidebar } from "@/components/main-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import CollectionsPage from "@/components/nft-table"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-[#0B1929] flex overflow-x-hidden">
        <MainSidebar />
        <SidebarInset className="flex flex-col flex-1 bg-[#061624]">
          <TopNav />
          <TopGainers />
        <CollectionsPage />        
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}