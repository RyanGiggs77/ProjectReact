import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'
import { statisticData } from '../data/statisticData'

const PieCharts = () => {
    return (
        <div className='flex justify-center'>
            <PieChart width={200} height={150}>
                <Pie
                    data={statisticData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                >
                    <Tooltip />
                    <Legend />
                    {statisticData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default PieCharts