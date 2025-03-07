import React, { useState } from "react";
import { Card, Select, Tabs, Tag, ConfigProvider } from "antd";
import PieCharts from "../charts/PieCharts";
import { statisticData } from "../data/statisticData";

const totalIncome = statisticData.income.reduce((sum, item) => sum + item.value, 0);
const totalExpense = statisticData.expense.reduce((sum, item) => sum + item.value, 0);

const StatisticCard = () => {
  const [activeTab, setActiveTab] = useState("income");

  return (
    <Card className="h-[460px] rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <span className="font-bold text-base">Statistic</span>
        <Select
          variant="borderless"
          className="text-xs"
          defaultValue="This Month"
          style={{ width: 120 }}
        >
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
            onChange={(key) => setActiveTab(key === "1" ? "income" : "expense")}
            items={[
              {
                label: `Income ($${totalIncome})`,
                key: "1",
                children: <PieCharts data={statisticData.income} />,
              },
              {
                label: `Expense ($${totalExpense})`,
                key: "2",
                children: <PieCharts data={statisticData.expense} />,
              },
            ]}
          />
        </ConfigProvider>
      </div>
      <div className="mt-3">
        {statisticData[activeTab].map((item, index) => (
          <div key={index} className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2">
              <Tag color={item.color} className="rounded-full">
                <span>{((item.value / (activeTab === "income" ? totalIncome : totalExpense)) * 100).toFixed(0)}%</span>
              </Tag>
              <span>{item.name}</span>
            </div>
            <div>
              <span>${item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default StatisticCard;
