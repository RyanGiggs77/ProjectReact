import React from 'react'
import { Card, ConfigProvider, Select } from 'antd'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const CashFlowCard = ({balance, data}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        bodyPadding: 10
                    },
                },
            }}>
            <Card className="h-[321px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Cashflow</h2>
                    <Select defaultValue="This Year" style={{ width: 120 }}>
                        <Select.Option value="thisYear">This Year</Select.Option>
                        <Select.Option value="lastYear">Last Year</Select.Option>
                    </Select>
                </div>
                <p className="text-gray-500">Total Balance</p>
                <h3 className="text-2xl font-bold text-green-700">${balance}</h3>

                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data} barGap={0} barCategoryGap={10}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" align="right" />
                        <Bar dataKey="income" fill="#003C2F" stackId="cashflow" radius={[5, 5, 0, 0]} />

                        <Bar dataKey="expense" fill="#BBF49C" stackId="cashflow" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </ConfigProvider>
    )
}

export default CashFlowCard