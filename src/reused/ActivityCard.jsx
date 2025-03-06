import React from 'react'
import { Card, Steps } from 'antd'
import { MoreOutlined } from '@ant-design/icons'


const ActivityCard = () => {
    return (
        <Card className="h-[406px] rounded-2xl shadow-lg">
            <div className="flex justify-between mb-2">
                <span className="text-lg font-bold">Recent Activity</span>
                <MoreOutlined />
            </div>
            <span className="text-base">Today</span>
            <div className="mt-1">
                <Steps
                    size="small"
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
            <span className="text-base">Today</span>
            <div className="mt-1">
                <Steps
                    size="small"
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
    )
}

export default ActivityCard