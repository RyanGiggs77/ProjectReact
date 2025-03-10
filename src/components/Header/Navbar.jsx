import React, { useState } from 'react';
import { ConfigProvider, Avatar, Badge, Input, Button, Drawer } from 'antd';
import { MenuOutlined, MessageOutlined, BellOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import { useAuth } from '../../context/authContext';
import Sidebar from '../sider/Sidebar'

const { Search } = Input;

const Navbar = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State untuk drawer

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
    <div className="flex justify-between h-[64px] p-4 bg-white shadow-md">
      {/* Tombol Hamburger untuk Mobile */}
      <Button 
        type="text" 
        className="sm:hidden" 
        icon={<MenuOutlined />} 
        onClick={() => setDrawerOpen(true)}
      />

      <div className="flex items-center text-[#1E4841] text-xl font-bold">
        {getHeaderTitle()}
      </div>

      <div className="hidden sm:flex flex-row-reverse items-center gap-4">
        {/* Tombol Logout */}
        <Button onClick={handleLogout} type="primary" className="bg-[#1E4841] border-[#1E4841]">
          Logout
        </Button>
        <Avatar style={{ backgroundColor: '#BBF49C', color: '#f56a00' }} />
        <span className="text-[#1E4841] text-lg font-semibold">
          {currentUser.displayName || currentUser.email}
        </span>
        <Badge dot>
          <Avatar icon={<BellOutlined />} />
        </Badge>
        <Avatar icon={<MessageOutlined />} />
        <Search className="hidden lg:flex" placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      </div>

      {/* Drawer untuk Sidebar di Mobile */}
      <Drawer 
        title="Menu" 
        placement="left" 
        onClose={() => setDrawerOpen(false)} 
        open={isDrawerOpen}
      >
        <Sidebar collapsed={false} />
      </Drawer>
    </div>
  );
};

export default Navbar;
