
import React from "react";
import { Card, Button, Typography } from "antd";


const VoucherCard = ({ code, description }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        alert(`Copied: ${code}`);
    };

    const { Title, Text } = Typography;

    return (
        <Card className="w-full md:w-[48%] shadow-md border border-gray-200">
            <Title level={4}>Voucher Code</Title>
            <div className=" bg-green-100 rounded-md text-center text-lg font-semibold">{code}</div>
            <Text className="block mt-2 text-gray-600">{description}</Text>
            <Button
                type="primary"
                block
                className="mt-4 bg-[#1E4841] hover:bg-green-800"
                onClick={copyToClipboard}
            >
                Copy Code
            </Button>
        </Card>
    );
};

export default VoucherCard;