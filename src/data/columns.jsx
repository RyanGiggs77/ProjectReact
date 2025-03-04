import { data } from "react-router-dom";
import { Tag } from "antd";

export const columns = [
    {
        title: 'Transaction Name',
        dataIndex: 'transaction',
        key: 'transaction',
    },
    {
        title: 'Date & Time',
        dataIndex: 'data',
        key: 'data',
    },
    {
        title: 'Amount',
        dataIndex: 'ammount',
        key: 'ammount',
    },
    {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
            let color = status === 'Success' ? 'green' : 'red';
            return (
                <Tag color={color} key={status}>
                    {status}
                </Tag>
            );
        },
    },
];
