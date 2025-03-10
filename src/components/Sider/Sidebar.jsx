import React from 'react'
import { Flex, Button, Card, ConfigProvider } from 'antd'
import Menus from './Menus'
import Logo from '../../assets/symbol.svg'
import { UnlockOutlined } from '@ant-design/icons'
import LockOpen from '../../assets/LockOpen.svg'
import LogoBig from '../../assets/symbolBig.svg'

const Sidebar = ({ collapsed }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Flex align='center' justify='center' className='h-[64px] bg-[#ECF4E9]'>
          <div className="flex items-center h-8 text-2xl gap-2">
            <img className='w-[22px] h-[22px]' src={Logo} alt="Logo" />
            {!collapsed && <span className='font-bold'>COINEST</span>}
          </div>
        </Flex>
        <Menus />
      </div>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              bodyPadding: 0
            },
          },
        }}>
        <Card className="p-4 m-2 bg-[#1E4841] relative"> {/* Tambahkan relative di sini */}
          <div className="flex flex-row justify-between">
            <img src={LockOpen} alt="LockOpen" className="w-8 h-8 p-1 rounded-lg text-[#1E4841] bg-[#ECF4E9]" />
            {/* Tambahkan absolute positioning */}
            <img src={LogoBig} className="absolute top-0 right-0  opacity-50" />
          </div>
          <div className="text-sm text-white mt-8">Gain all access to your finance with detailed analytics and graph</div>
          <Button type='primary' className='w-50 mt-4 bg-[#BBF49C] text-black'>Get Pro</Button>
        </Card>
      </ConfigProvider>
    </div>
  )
}
export default Sidebar
