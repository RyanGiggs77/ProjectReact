import React from 'react';
import { Card, Progress, ConfigProvider } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const DailyLimitsCard = ({ value, spentOf, percent }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        bodyPadding: 16
                    },
                },
            }}>
            <Card className='mt-4 sm:mt-0 rounded-2xl w-full shadow-lg md:h-[107px] sm:h-[174px] '>
                <div className="">
                    <div className="flex justify-between items-start font-bold">
                        <div className="flex text-base"> Daily Limit</div>
                        <div className="flex"><MoreOutlined /></div>
                    </div>
                    <div className='flex justify-between items-center md:mt-3 sm:mt-8'>
                        <div className='flex flex-row items-end gap-1'>
                            <div className="font-bold text-base">${value}</div>
                            <div className="text-xs mb-1">Spent of ${spentOf}</div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className="font-bold text-xs">{percent}%</div>
                        </div>
                    </div>
                    <div className=''>
                        <Progress  strokeColor="#1E4841" trailColor="#BBF49C" percent={50} showInfo={false} />
                    </div>
                </div>
            </Card>
        </ConfigProvider>
    )
}

export default DailyLimitsCard