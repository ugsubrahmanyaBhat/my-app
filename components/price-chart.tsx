'use client'

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = Array.from({ length: 100 }, (_, i) => ({
  time: i,
  price: 2.5 - Math.random() * 0.5
}))

export function PriceChart() {
  return (
    <div className="bg-[#0B1929] p-4 rounded-lg">
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <h3 className="font-medium">Stacks / TetherUS • 15 • Binance</h3>
          <div className="text-red-500">-1.11%</div>
        </div>
        <div className="text-sm text-gray-400">Vol • STX 188.88K</div>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" hide />
            <YAxis domain={['auto', 'auto']} hide />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#ff4444"
              dot={false}
              strokeWidth={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

