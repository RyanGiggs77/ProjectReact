import React from 'react';
import { Menu, ConfigProvider } from 'antd';
import { menuData } from '../../data/menuData';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const iconComponents = {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
};


const items = menuData.map((item) => ({
  key: item.key,
  icon: iconComponents[item.icon] && React.createElement(iconComponents[item.icon]),
  label: item.label,
  className: 'px-8 flex items-center hover:bg-costum-greenL rounded-md',
  path: item.path,
}));

const Menus = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemActiveBg: '#ffffff',
            itemBorderRadius: 50,
            itemHoverBg: '#1E4841',
            itemHoverColor: '#ffffff',
            itemColor: '#6B7271',
            itemSelectedBg: '#BBF49C',
            itemSelectedColor: '#242E2C',
            itemMarginInline: 15,
          },
        },
      }}
    >
      <Menu
        mode='inline'
        className='text-white h-full px-3'
        style={{ background: '#ECF4E9' }}
        items={items}
        onClick={({ key }) => {
          const menuItem = items.find((item) => item.key === key);
          if (menuItem && menuItem.path) {
            navigate(menuItem.path);
          }
        }}
      />
    </ConfigProvider>
  );
};

export default Menus;
