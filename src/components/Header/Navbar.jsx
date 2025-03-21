import React, { useState, useEffect } from 'react';
import { Avatar, Badge, Input, Button, Drawer } from 'antd';
import { MenuOutlined, MessageOutlined, BellOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Sidebar from '../Sider/Sidebar';

const { Search } = Input;

const Navbar = () => {
  const { user, logout } = useAuth();  // Ambil user dari AuthContext
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [promoName, setPromoName] = useState('');

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    const fetchPromo = async () => {
      const match = location.pathname.match(/\/promo\/(\d+)/);
      const id = match ? match[1] : null;


      if (id) {
        try {
          const response = await fetch(`https://react-express-backend.vercel.app/promos/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          const data = await response.json();
          if (response.ok) {
            setPromoName(data.promo_name);
            console.log(`Promo name set to: ${data.promo_name}`); // Debug log
          } else {
            console.error("Failed to fetch promo:", data.error);
          }
        } catch (error) {
          console.error("Error fetching promo:", error);
        }
      } else {
        console.log('Not a promo path or id is missing'); // Debug log
      }
    };

    fetchPromo();
  }, [location.pathname]);

  const getHeaderTitle = () => {
    if (location.pathname.startsWith('/promo/') && promoName) {
      return `promo ${promoName}`;
    }

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
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex justify-between w-full h-[64px] p-4 bg-white shadow-md">
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
        <Button onClick={handleLogout} type="primary" className="bg-[#1E4841] border-[#1E4841]">
          Logout
        </Button>

        {/* Avatar Profile */}
        <Avatar style={{ backgroundColor: '#BBF49C', color: '#f56a00' }} src={user?.photoURL}>
          {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "G"}
        </Avatar>

        {/* Nama atau email pengguna */}
        <span className="text-[#1E4841] text-lg font-semibold">
          {user?.displayName || user?.email || "Guest"}
        </span>

        {/* Notifikasi & Pesan */}
        <Badge dot>
          <Avatar icon={<BellOutlined />} />
        </Badge>
        <Avatar icon={<MessageOutlined />} />

        {/* Search Box */}
        <Search className="hidden lg:flex" placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} />
      </div>

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