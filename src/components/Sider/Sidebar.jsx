import React from 'react'
import { Menu, Flex} from 'antd'
import Menus from './Menus'
import Logo from '../../assets/symbol.svg'

const Sidebar = ({ collapsed }) => {
  return (
    <>
        <Flex align='center' justify='center' className='h-[64px] bg-[#ECF4E9]  '>
            <div className="flex items-center h-8 text-2xl gap-2">
                <img className='w-[22px] h-[22px]' src={Logo} alt="Logo" />
                {!collapsed && <span className='font-bold'>COINEST</span>}
            </div>
        </Flex>
        <Menus />
    </>
  )
}
 
export default Sidebar