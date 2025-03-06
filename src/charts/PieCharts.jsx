import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'


const PieCharts = ({ data }) => {
    // Jika data berbentuk nested array (misalnya [ [obj1, obj2, ...] ])
    const normalizedData = Array.isArray(data[0]) ? data[0] : data;
    console.log(normalizedData);

    return (
        <div className='flex justify-center'>
            <PieChart width={200} height={150}>
                <Pie
                    data={normalizedData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {normalizedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
                
            </PieChart>
        </div>
    );
}




export default PieCharts