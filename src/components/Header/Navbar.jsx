import React from 'react';
import { ConfigProvider, Avatar, Badge, Input, Button } from 'antd';
import { MessageOutlined, BellOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';

const { Search } = Input;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/promo':
        return 'Promo';
      default:
        return 'Dashboard';
    }
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex justify-between h-[64px] p-4">
      <div className="flex items-center text-[#1E4841] text-xl font-bold">
        {getHeaderTitle()}
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        {/* Tombol Logout */}
        <Button onClick={handleLogout} type="primary" danger>
          Logout
        </Button>
        <Avatar style={{ backgroundColor: '#BBF49C', color: '#f56a00' }} />
        <span className="text-[#1E4841] text-lg font-semibold">
          Andrew Forbist
        </span>
        <Badge dot>
          <Avatar icon={<BellOutlined />} />
        </Badge>
        <Avatar icon={<MessageOutlined />} />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
};

export default Navbar;
