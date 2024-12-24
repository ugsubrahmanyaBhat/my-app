export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="bg-[#0B1929] p-6 rounded-lg">
        <h3 className="text-gray-400 mb-2">1 Day Unique Users</h3>
        <div className="text-3xl font-bold text-blue-400">1,228</div>
        <div className="text-sm text-gray-400 mt-2">Unique users in the last 24 hours</div>
      </div>
      <div className="bg-[#0B1929] p-6 rounded-lg">
        <h3 className="text-gray-400 mb-2">1 Day Volume</h3>
        <div className="text-3xl font-bold text-blue-400">$1.70M</div>
        <div className="text-sm text-gray-400 mt-2">Volume in the last 24 hours</div>
      </div>
      <div className="bg-[#0B1929] p-6 rounded-lg">
        <h3 className="text-gray-400 mb-2">Average TX fee</h3>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <div className="text-sm text-gray-400">LOW</div>
            <div className="text-blue-400">0.21 STX</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">MEDIUM</div>
            <div className="text-blue-400">0.29 STX</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">HIGH</div>
            <div className="text-blue-400">0.83 STX</div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B1929] p-6 rounded-lg">
        <h3 className="text-gray-400 mb-2">Latest Block</h3>
        <div className="text-3xl font-bold "><span className="text-blue-400">#355,733</span></div>
        <div className="text-sm text-gray-400 mt-2">1 transactions, a few seconds ago</div>
      </div>
      <div className="bg-[#0B1929] p-6 rounded-lg">
        <h3 className="text-gray-400 mb-2">1 Day Volume</h3>
        <div className="text-3xl font-bold text-blue-400">$1.70M</div>
        <div className="text-sm text-gray-400 mt-2">Volume in the last 24 hours</div>
      </div>
      <div className="bg-[#0B1929] p-6 rounded-lg"> 
        <h3 className="text-gray-400 mb-2">1 Day Volume</h3>
        <div className="text-3xl font-bold text-blue-400">$1.70M</div>
        <div className="text-sm text-gray-400 mt-2">Volume in the last 24 hours</div>
      </div>
    </div>
  )
}

