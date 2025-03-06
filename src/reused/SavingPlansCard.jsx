import React from 'react'
import { Card, ConfigProvider } from 'antd'
import { PlusOutlined, WarningOutlined, HomeOutlined, RocketOutlined } from '@ant-design/icons'
import StatusCard from './Statuscard'

const SavingPlansCard = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        bodyPadding: 16
                    },
                },
            }}>
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
                            icon={<WarningOutlined className='h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md'/>}
                            title="Emergency"
                            amount={4000}
                            target={10000}
                            percent={40}
                        />
                        <StatusCard
                            icon={<HomeOutlined className='h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md'/>}
                            title="Home"
                            amount={10000}
                            target={20000}
                            percent={50}
                        />
                        <StatusCard
                            icon={<RocketOutlined className='h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md'/>}
                            title="Travel"
                            amount={20000}
                            target={30000}
                            percent={70}
                        />
                    </div>
                </div>
            </Card>
        </ConfigProvider>
    )
}

export default SavingPlansCard