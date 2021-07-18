import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

const Graph = ({ data }) => {
  return (
    <div>
      <LineChart width={1000} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="game"
          stroke="magenta"
          strokeDasharray="7 7"
          dot={false}
        />
        <Line
          type="monotone"
          strokeDasharray="7 7"
          dataKey="work"
          stroke="green"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="leisure"
          strokeDasharray="7 7"
          stroke="#A6808C"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="happiness"
          stroke="#EF5B5B"
          strokeWidth={3}
          dot={false}
        />
        <CartesianGrid stroke="#12263A" />
        <XAxis dataKey="created_at" stroke="white" hide={true} />
        <YAxis />
        <Legend />
        <Tooltip />
      </LineChart>
    </div>
  )
}

export default Graph
