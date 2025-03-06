

import React from 'react'
import { Card, Select, Tabs, Tag, ConfigProvider } from 'antd'
import PieCharts from '../charts/PieCharts'


const StatisticCard = ({ datas }) => {
  return (
    <Card className="h-[460px] rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <span className="font-bold text-base">Statistic</span>
        <Select variant="borderless" className="text-xs" defaultValue="This Month" style={{ width: 120 }}>
          <Select.Option value="This Month">This Month</Select.Option>
          <Select.Option value="Last Month">Last Month</Select.Option>
        </Select>
      </div>
      <div className="flex justify-center items-center">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                inkBarColor: "#BBF49C",
              },
            },
          }}
        >
          <Tabs
            className="flex"
            defaultActiveKey="1"
            centered
            items={[
              {
                label: 'Income ($4,800)',
                key: '1',
                children: <PieCharts data={[datas]} />,
              },
              {
                label: 'Expense ($3,500)',
                key: '2',
                children: <PieCharts data={[datas]} />,
              },
            ]}
          />
        </ConfigProvider>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center mt-3">
          <div>
            <Tag color="#BBF49C" className="rounded-full">
              <span>50%</span>
            </Tag>
            <span>Income</span>
          </div>
          <div>
            <span>$5000</span>
          </div>
        </div>
        {/* Ulangi blok untuk item statistik lainnya */}
        <div className="flex justify-between items-center mt-3">
          <div>
            <Tag color="#BBF49C" className="rounded-full">
              <span>50%</span>
            </Tag>
            <span>Income</span>
          </div>
          <div>
            <span>$5000</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <Tag color="#BBF49C" className="rounded-full">
              <span>50%</span>
            </Tag>
            <span>Income</span>
          </div>
          <div>
            <span>$5000</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <Tag color="#BBF49C" className="rounded-full">
              <span>50%</span>
            </Tag>
            <span>Income</span>
          </div>
          <div>
            <span>$5000</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <Tag color="#BBF49C" className="rounded-full">
              <span>50%</span>
            </Tag>
            <span>Income</span>
          </div>
          <div>
            <span>$5000</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default StatisticCard