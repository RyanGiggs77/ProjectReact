import React from 'react';
import { Card, ConfigProvider, Progress, Select, Button, Table, Tabs, Tag, Steps } from 'antd';
import { WifiOutlined, PlusOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, MoreOutlined, WarningOutlined, HomeOutlined, RocketOutlined, DollarOutlined, SlidersOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { data } from '../data/chartsData'
import StatusCard from '../reused/statuscard';
import Namecard from '../reused/namecard';
import IncomeCard from '../reused/incomecard';
import { dataSource } from '../data/dataSource';
import { columns } from '../data/columns';
import { statisticData } from '../data/statisticData';
import PieCharts from '../charts/PieCharts';

const totalExpense = 3500;
const income = 4800;


const Dashboard = () => {

    // const [selected, setSelected] = React.useState("income");

    // const options = [
    //     { label: "Income ($4,800)", value: "income" },
    //     { label: "Expense ($3,500)", value: "expense" },
    // ];


    return (

        <div className="grid grid-cols-12 gap-2">
            {/* Left Section */}
            <div className="col-span-3  h-[888px]">
                <Namecard
                    name="Andrew Forbist"
                    balance="$562,000"
                    exp="11/29"
                    cvv="323"
                />

                <Card
                    styles={{
                        body: { display: "None" }, // Sembunyikan isi Card
                        header: { display: "None" }, // Sembunyikan header
                        actions: { background: "", padding: "10px" }, // Atur tampilan actions
                        padding: 0
                    }}

                    actions={[
                        <div key="setting" className="flex flex-col items-center">
                            <SettingOutlined />
                            <span className='mt-[4px]'>Settings</span>
                        </div>,
                        <div key="edit" className="flex flex-col items-center">
                            <EditOutlined />
                            <span className='mt-[4px]'>Edit</span>
                        </div>,
                        <div key="ellipsis" className="flex flex-col items-center">
                            <EllipsisOutlined />
                            <span className='mt-[4px]'>More</span>
                        </div>,
                        <div key="ellipsis" className="flex flex-col items-center">
                            <EllipsisOutlined />
                            <span className='mt-[4px]'>More</span>
                        </div>,
                    ]}
                    className="mt-4 rounded-2xl shadow-lg h-[72px]"
                />

                <ConfigProvider
                    theme={{
                        components: {
                            Card: {
                                bodyPadding: 16
                            },
                        },
                    }}
                >
                    <Card
                        className='mt-4 rounded-2xl shadow-lg h-[107px]'
                    >
                        <div className="">
                            <div className="flex justify-between items-start font-bold">
                                <div className="flex text-base"> Daily Limit</div>
                                <div className="flex"><MoreOutlined /></div>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <div className='flex flex-row items-end gap-1'>
                                    <div className="font-bold text-base">$20.000</div>
                                    <div className="text-xs mb-1">Spent of $20.000.000</div>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <div className="font-bold text-xs">12.5%</div>
                                </div>
                            </div>
                            <div className=''>
                                <Progress strokeColor="#1E4841" trailColor="#BBF49C" percent={50} showInfo={false} />
                            </div>
                        </div>

                    </Card>
                    <Card
                        className='mt-4 rounded-2xl shadow-lg h-[475px]'
                    >
                        <div className=''>
                            <div className='flex justify-between items-end'>
                                <div className='flex text-base font-bold'>Saving Plans</div>
                                <div className='flex text-xs mb-1'>
                                    <PlusOutlined className="mr-1" />Add Plans
                                </div>
                            </div>
                            <div className=' flex flex-col mt-3'>
                                <div className="text-xs">Total Savings</div>
                                <div className="text-2xl font-bold">$84,500</div>
                            </div>
                            <div className="flex flex-col items-center mt-4 gap-2">
                                <StatusCard
                                    totalSaving={5000}
                                    currentSaving={5000}
                                    target={10000}
                                    percent={50}
                                    icon={<WarningOutlined className="h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md" />}
                                />
                                <StatusCard
                                    totalSaving={5000}
                                    currentSaving={5000}
                                    target={10000}
                                    percent={50}
                                    icon={<HomeOutlined className="h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md" />}
                                />
                                <StatusCard
                                    totalSaving={5000}
                                    currentSaving={5000}
                                    target={10000}
                                    percent={50}
                                    icon={<RocketOutlined className="h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md" />}
                                />
                            </div>
                        </div>


                    </Card>
                </ConfigProvider>
            </div>

            {/* Center Section */}

            {/* Center Section */}
            <div className="col-span-6 h-[888px]">
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
                            icon={<DollarOutlined className=" h-9 w-9 bg-[#ECF4E9] p-2 rounded-md justify-center" />}
                            percent={-2.00}
                            income={85500}

                        />

                        <IncomeCard
                            icon={<DollarOutlined className=" h-9 w-9 bg-[#ECF4E9] p-2 rounded-md justify-center" />}
                            percent={-2.00}
                            income={85.500}

                        />

                        <IncomeCard
                            icon={<DollarOutlined className=" h-9 w-9 bg-[#ECF4E9] p-2 rounded-md justify-center" />}
                            percent={2.00}
                            income={85.500}

                        />
                    </ConfigProvider>
                </div>
                <div className="mt-4">
                    <ConfigProvider
                        theme={{
                            components: {
                                Card: {
                                    bodyPadding: 10
                                },
                            },
                        }}
                    >
                        <Card className="h-[321px]">

                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Cashflow</h2>
                                <Select defaultValue="This Year" style={{ width: 120 }}>
                                    <Select.Option value="thisYear">This Year</Select.Option>
                                    <Select.Option value="lastYear">Last Year</Select.Option>
                                </Select>
                            </div>

                            <p className="text-gray-500">Total Balance</p>
                            <h3 className="text-2xl font-bold text-green-700">$562,000</h3>


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
                </div>
                <div className="mt-3">
                    <ConfigProvider
                        theme={{
                            components: {
                                Table: {
                                    cellPaddingBlock: 0,
                                    cellFontSize: 12
                                },
                            },
                        }}
                    >
                        <Card className="h-[353px] rounded-2xl shadow-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">Recent Transaction</span>
                                <div>
                                    <Select defaultValue="This Month" style={{ width: 120 }}>
                                        <Select.Option value="January">January</Select.Option>
                                        <Select.Option value="February">February</Select.Option>
                                        <Select.Option value="March">March</Select.Option>
                                        <Select.Option value="April">April</Select.Option>
                                        <Select.Option value="May">May</Select.Option>
                                    </Select>
                                    <Button className="ml-2" icon={<SlidersOutlined />}></Button>
                                </div>
                            </div>
                            <div>
                                <Table className="mt-1" pagination={{ pageSize: 3 }} columns={columns} dataSource={dataSource} />;
                            </div>
                        </Card>
                    </ConfigProvider>
                </div>
            </div>

            <div className="col-span-3 h-[888px] flex flex-col gap-4">
                <Card className='h-[460px] rounded-2xl shadow-lg'>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-base">Statistic</span>
                        <Select variant="borderless" className="text-xs" defaultValue="This Month" style={{ width: 120 }}>
                            <Select.Option value="This Month">This Month</Select.Option>
                            <Select.Option value="Last Month">Last Month</Select.Option>
                        </Select>
                    </div>
                    <div className="flex justify-center w-auto items-center ">
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
                                className='flex'
                                defaultActiveKey="1"
                                centered
                                items={[
                                    {
                                        label: 'Income ($4,800)',
                                        key: '1',
                                        children: <PieCharts />,
                                    },
                                    {
                                        label: 'Expense ($3,500)',
                                        key: '2',
                                        children: <PieCharts />,
                                    },
                                ]}
                            />
                        </ConfigProvider>
                    </div>
                    <div className=" ">
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
                <Card className='h-[406px] rounded-2xl shadow-lg '>
                    <div className="flex justify-between mb-2">
                        <span className='text-lg font-bold'>Recent Activity</span>
                        <MoreOutlined />
                    </div>
                    <span className='text-base'>Today</span>
                    <div className="mt-1">
                        <Steps
                        size='small'
                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description: "this is description"
                                },
                                {
                                    title: 'In Progress',
                                    description: "this is description"
                                },
                                {
                                    title: 'Waiting',
                                    description: "this is description"
                                },
                            ]}
                        />
                    </div>
                    <span className='text-base'>Today</span>
                    <div className="mt-1">
                        <Steps
                        size='small'
                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description: "this is description"
                                },
                                {
                                    title: 'In Progress',
                                    description: "this is description"
                                },
                               
                            ]}
                        />
                    </div>
                </Card>
            </div>



        </div>
    );
};

export default Dashboard;

