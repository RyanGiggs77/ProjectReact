import React, { useState, useEffect } from 'react';
import { Card, ConfigProvider, Select, Table, Button } from 'antd';
import { SlidersOutlined } from '@ant-design/icons';
import { useAuth } from '../context/authContext';

const TransactionTable = ({ data, columns }) => {
    const { user, accessToken } = useAuth();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('https://react-express-backend.vercel.app/transactions', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    setTransactions(data);
                } else {
                    console.error("Failed to fetch transactions:", data.error);
                }
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        if (user) {
            fetchTransactions();
        }
    }, [user, accessToken]); // ✅ Tambahkan dependency array untuk mencegah infinite loop

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
                    <Table
                        className="mt-1"
                        pagination={{ pageSize: 3 }}
                        columns={columns}
                        dataSource={transactions} // ✅ Ganti data dengan state transactions
                    />
                </div>
            </Card>
        </ConfigProvider>
    );
};

export default TransactionTable;