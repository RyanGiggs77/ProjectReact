import React from 'react';
import { Card, ConfigProvider, Progress, Select, Button, Table, Tabs, Tag, Steps } from 'antd';
import { WifiOutlined, PlusOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, MoreOutlined, WarningOutlined, HomeOutlined, RocketOutlined, DollarOutlined, SlidersOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { data } from '../data/chartsData';
import Namecard from '../reused/namecard';
import IncomeCard from '../reused/incomecard';
import { dataSource } from '../data/dataSource';
import { columns } from '../data/columns';
import DailyLimitsCard from '../reused/DailyLimitsCard';
import SavingPlansCard from '../reused/SavingPlansCard';
import CashFlowCard from '../reused/CashFlowCard';
import TransactionTable from '../reused/TransactionTable';
import StatisticCard from '../reused/StatisticCard';
import { statisticData } from '../data/statisticData';
import ActivityCard from '../reused/ActivityCard';

const totalExpense = 3500;
const income = 4800;

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      {/* Left Section */}
      <div className="col-span-12 md:col-span-3 h-auto md:h-[888px]">
        <div className="flex flex-col md:flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Namecard
            name="Andrew Forbist"
            balance="$562,000"
            exp="11/29"
            cvv="323"
          />

          {/* <Card
    styles={{
      body: { display: "None" },
      header: { display: "None" },
      actions: { background: "", padding: "10px" },
      padding: 0
    }}
    actions={[
      <div key="setting" className="flex flex-col items-center">
        <SettingOutlined />
        <span className="mt-[4px]">Settings</span>
      </div>,
      <div key="edit" className="flex flex-col items-center">
        <EditOutlined />
        <span className="mt-[4px]">Edit</span>
      </div>,
      <div key="ellipsis" className="flex flex-col items-center">
        <EllipsisOutlined />
        <span className="mt-[4px]">More</span>
      </div>,
      <div key="ellipsis2" className="flex flex-col items-center">
        <EllipsisOutlined />
        <span className="mt-[4px]">More</span>
      </div>,
    ]}
    className="rounded-2xl shadow-lg h-[72px]"
  /> */}

          <ConfigProvider
            theme={{
              components: {
                Card: {
                  bodyPadding: 16
                },
              },
            }}
          >
            <DailyLimitsCard
              value={20000}
              spentOf={20000000}
              percent={12.5}
            />
          </ConfigProvider>
        </div>
        <SavingPlansCard />
      </div>

      {/* Center Section */}
      <div className="col-span-12 md:col-span-6 h-auto md:h-[888px] ">
        <div className="grid grid-cols-3 gap-4">
          <ConfigProvider
            theme={{
              components: {
                Card: {
                  bodyPadding: 0
                },
              },
            }}
          >
            <IncomeCard
              icon={<DollarOutlined className="h-9 w-9 bg-[#ECF4E9] p-2 rounded-md" />}
              percent={-2.00}
              income={85500}
            />

            <IncomeCard
              icon={<DollarOutlined className="h-9 w-9 bg-[#ECF4E9] p-2 rounded-md" />}
              percent={-2.00}
              income={85.500}
            />

            <IncomeCard
              icon={<DollarOutlined className="h-9 w-9 bg-[#ECF4E9] p-2 rounded-md" />}
              percent={2.00}
              income={85.500}
            />
          </ConfigProvider>
        </div>
        <div className="mt-4">
          <CashFlowCard
            balance={562000}
            data={data}
          />
        </div>
        <div className="mt-3">
          <TransactionTable
            data={dataSource}
            columns={columns}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-12 md:col-span-3 h-auto md:h-[888px]  flex flex-col gap-4">
        <StatisticCard datas={statisticData} />
        <ActivityCard />
      </div>
    </div>
  );
};

export default Dashboard;
