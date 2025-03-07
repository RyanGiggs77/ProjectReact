import React from 'react'
import { Flex, Button, Card, ConfigProvider } from 'antd'
import Menus from './Menus'
import Logo from '../../assets/symbol.svg'
import { UnlockOutlined } from '@ant-design/icons'
import LockOpen from '../../assets/LockOpen.svg'

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
        <Card className="p-4 m-2  bg-[#1E4841]">
          {/* <UnlockOutlined className="text-4xl text-[#1E4841] bg-[#ECF4E9]" /> */}
          <img src={LockOpen} alt="LockOpen" className="w-5 h-5  rounded-lg text-[#1E4841] bg-[#ECF4E9]"  />
          <div className="text-sm">Unlock all features</div>
          <Button type='primary' className='w-full mt-4'>Upgrade</Button>
        </Card>
      </ConfigProvider>
      
    </div>
  )
}

export default Sidebar
