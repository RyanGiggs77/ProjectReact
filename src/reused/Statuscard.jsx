import React from 'react'
import { Card, Progress, ConfigProvider } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const CardStatus = ({ amount, target, percent, icon, title }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        bodyPadding: 16
                    },
                },
            }}
        >
            <Card className='rounded-2xl shadow-lg h-[103px] w-full' >
                <div className="">
                    <div className="flex justify-between items-start font-bold">
                        <div className='flex gap-2'>
                            <div className="flex">{icon}</div>
                            <div className="flex text-base">{title} Fund</div>
                        </div>
                        <div className="flex"><MoreOutlined /></div>
                    </div>
                    <div className='mt-3'>
                        <Progress strokeColor="#1E4841" trailColor="#BBF49C" percent={percent} showInfo={false} />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <div className='text-[10px] font-bold mr-1'>${amount}</div>
                            <div className='text-[10px]'>{percent}%</div>
                        </div>
                        <div className='flex'>
                            <div className='text-[10px] mr-1'>Target: </div>
                            <div className='text-[10px]'>${target}</div>
                        </div>
                    </div>
                </div>
            </Card>
        </ConfigProvider>
    )
}

export default CardStatus;
