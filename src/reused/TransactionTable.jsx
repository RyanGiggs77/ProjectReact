import React from 'react'
import { Card, ConfigProvider, Select, Table, Button } from 'antd'
import { SlidersOutlined } from '@ant-design/icons'


const TransactionTable = ({ data, columns }) => {
    return (
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
                    <Table className="mt-1" pagination={{ pageSize: 3 }} columns={columns} dataSource={data} />;
                </div>
            </Card>
        </ConfigProvider>
    )
}

export default TransactionTable