import React from 'react'
import { ConfigProvider, Avatar, Badge, Input } from 'antd'
import { MessageOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
const { Search } = Input;


const Navbar = () => {

    const onSearch = (value, _e, info) => console.log(info?.source, value);
const location = useLocation();

    const getHeaderTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Dashboard';
            case '/promo':
                return 'Promo';
            default:
                return 'Dashboard';
        }
    }

    
    return (
        <div className='flex justify-between h-[64px] p-4 '>
            <div className='flex items-center text-[#1E4841] text-xl font-bold'>
                {getHeaderTitle()}
            </div>
            <div className='flex flex-row-reverse items-center gap-4'>
                <Avatar style={{ backgroundColor: '#BBF49C', color: '#f56a00', }} />
                <span className='text-[#1E4841] text-lg font-semibold'>
                    Andrew Forbist
                </span>
                <Badge dot>
                    <Avatar icon={<BellOutlined />} />
                </Badge>
                <Avatar icon={<MessageOutlined />} />
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />
            </div>
        </div>
    )

}

export default Navbar;