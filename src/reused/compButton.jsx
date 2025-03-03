import React from 'react'
import { Button, ConfigProvider } from 'antd'

const CompButton = ({ Name, onClick}) => {
  return (
    <ConfigProvider
    theme={{
        components: {
          Button: {
            defaultHoverBg: '#1E4841',
            defaultHoverColor: '#ffffff',
            defaultBg: '#BBF49C',
            defaultColor: '#000000',
            defaultActiveColor: '#000000',
          },
        },
      }}
>
   
<Button color="pink" className="bg-[#BBF49C] hover:bg-[#1E4841]" onClick={onClick} >
  {Name}
</Button>
</ConfigProvider> 
  )
}

export default CompButton