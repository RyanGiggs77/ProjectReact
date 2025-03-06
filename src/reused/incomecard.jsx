import React from 'react';
import { Card, Tag, Flex } from 'antd';
import { MoreOutlined, RiseOutlined, PlusOutlined, FallOutlined } from '@ant-design/icons';

const IncomeCard = ({ icon, percent, income, title }) => {
    // Gunakan variabel agar lebih sederhana
    const bg = percent > 0 ? "#BBF49C" : "#FDCED1";
    const textColor = percent > 0 ? "#1E4841" : "#F73541";

    return (
        <Card className="rounded-2xl shadow-lg h-[174px] flex flex-col justify-between p-4">
            {/* Header Icon */}
            <div className="flex justify-between items-center">
                {icon}
                <MoreOutlined />
            </div>

            <Flex>
                <Tag color={bg} className="mt-5 rounded-full">
                    {/* Ikon berubah sesuai nilai percent */}
                    {percent > 0 ? (
                        <RiseOutlined className="text-[10px]" style={{ color: textColor }} />
                    ) : (
                        <FallOutlined className="text-[10px]" style={{ color: textColor }} />
                    )}

                    <PlusOutlined className="text-[10px]" style={{ color: textColor }} />

                    <span className="text-[10px]" style={{ color: textColor }}>
                        {percent}%
                    </span>
                </Tag>
            </Flex>

            {/* Total Income */}
            <div>
                <div className="text-2xl font-bold mt-2">${income}</div>
                <div className="text-gray-500 text-sm mt-2">Total Income</div>
            </div>
        </Card>
    );
};

export default IncomeCard;
