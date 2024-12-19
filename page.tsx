import { TopNav } from "./components/top-nav"
import { TopGainers } from "./components/top-gainers"
import { StatsCards } from "./components/stats-cards"
import { PriceChart } from "./components/price-chart"
import { RecentSwaps } from "./components/recent-swaps"
import { TradingPairsTable } from "./components/trading-pairs-table"
import { Footer } from "./components/footer"
import { MainSidebar } from "./components/main-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#0B1929] flex">
        <MainSidebar />
        <SidebarInset className="flex flex-col flex-1 bg-[#061624]">
          <TopNav />
          <TopGainers />
          <div className="container mx-auto flex-1">
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
              <PriceChart />
              <RecentSwaps />
            </div>
            <div className="p-4">
              <TradingPairsTable />
            </div>
          </div>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

