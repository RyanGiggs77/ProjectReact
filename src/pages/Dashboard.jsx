import React from 'react';
import { Card, ConfigProvider, Progress } from 'antd';
import { WifiOutlined, PlusOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, MoreOutlined, WarningOutlined, HomeOutlined, RocketOutlined, DollarOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';
import Namecard from '../reused/namecard';

const Dashboard = () => {

    return (
        <div className="grid grid-cols-12 gap-10">
            {/* Left Section */}
            <div className="col-span-3 w-[283px] h-[888px]">
                <Namecard
                    name="Andrew Forbist"
                    balance="$562,000"
                    exp="11/29"
                    cvv="323"
                />

                <Card
                    styles={{
                        body: { display: "None" }, // Sembunyikan isi Card
                        header: { display: "None" }, // Sembunyikan header
                        actions: { background: "", padding: "10px" }, // Atur tampilan actions
                        padding: 0
                    }}

                    actions={[
                        <div key="setting" className="flex flex-col items-center">
                            <SettingOutlined />
                            <span className='mt-[4px]'>Settings</span>
                        </div>,
                        <div key="edit" className="flex flex-col items-center">
                            <EditOutlined />
                            <span className='mt-[4px]'>Edit</span>
                        </div>,
                        <div key="ellipsis" className="flex flex-col items-center">
                            <EllipsisOutlined />
                            <span className='mt-[4px]'>More</span>
                        </div>,
                        <div key="ellipsis" className="flex flex-col items-center">
                            <EllipsisOutlined />
                            <span className='mt-[4px]'>More</span>
                        </div>,
                    ]}
                    className="mt-4 rounded-2xl shadow-lg h-[72px]"
                />

                <ConfigProvider
                    theme={{
                        components: {
                            Card: {
                                bodyPadding: 16
                            },
                        },
                    }}
                >
                    <Card
                        className='mt-4 rounded-2xl shadow-lg h-[107px]'
                    >
                        <div className="">
                            <div className="flex justify-between items-start font-bold">
                                <div className="flex text-base"> Daily Limit</div>
                                <div className="flex"><MoreOutlined /></div>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <div className='flex flex-row items-end gap-1'>
                                    <div className="font-bold text-base">$20.000</div>
                                    <div className="text-xs mb-1">Spent of $20.000.000</div>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <div className="font-bold text-xs">12.5%</div>
                                </div>
                            </div>
                            <div className=''>
                                <Progress strokeColor="#1E4841" trailColor="#BBF49C" percent={50} showInfo={false} />
                            </div>
                        </div>

                    </Card>
                    <Card
                        className='mt-4 rounded-2xl shadow-lg h-[475px]'
                    >
                        <div className=''>
                            <div className='flex justify-between items-end'>
                                <div className='flex text-base font-bold'>Saving Plans</div>
                                <div className='flex text-xs mb-1'>
                                    <PlusOutlined className="mr-1" />Add Plans
                                </div>
                            </div>
                            <div className=' flex flex-col mt-3'>
                                <div className="text-xs">Total Savings</div>
                                <div className="text-2xl font-bold">$84,500</div>
                            </div>
                            <div className="flex flex-col items-center mt-4 gap-2">
                                <Card
                                    className=' rounded-2xl shadow-lg h-[103px] w-[251px]'
                                >
                                    <div className="">
                                        <div className="flex justify-between items-start font-bold">
                                            <div className='flex gap-2'>
                                                <div className="flex"><WarningOutlined  className="h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md" /></div>
                                                <div className="flex text-base">Emergency Fund</div> 
                                            </div>
                                            <div className="flex"><MoreOutlined /></div>
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <Progress strokeColor="#1E4841" trailColor="#BBF49C" percent={50} showInfo={false} />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <div className='text-xs font-bold mr-1'>$5.000</div>
                                                <div className='text-xs'>50%</div>
                                            </div>
                                            <div className='flex'>
                                                <div className='text-xs mr-1'>Target: </div>
                                                <div className='text-xs'>Target: $10.000</div>
                                            </div>
                                        </div>
                                    </div>

                                </Card>
                                <Card
                                    className=' rounded-2xl shadow-lg h-[103px] w-[251px]'
                                >
                                    <div className="">
                                        <div className="flex justify-between items-start font-bold">
                                            <div className='flex gap-2'>
                                                <div className="flex"><RocketOutlined  className="h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md" /></div>
                                                <div className="flex text-base"> Vacation Fund</div> 
                                            </div>
                                            <div className="flex"><MoreOutlined /></div>
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <Progress strokeColor="#1E4841" trailColor="#BBF49C" percent={50} showInfo={false} />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <div className='text-xs font-bold mr-1'>$5.000</div>
                                                <div className='text-xs'>50%</div>
                                            </div>
                                            <div className='flex'>
                                                <div className='text-xs mr-1'>Target: </div>
                                                <div className='text-xs'>Target: $10.000</div>
                                            </div>
                                        </div>
                                    </div>

                                </Card>
                                <Card
                                    className=' rounded-2xl shadow-lg h-[103px] w-[251px]'
                                >
                                    <div className="">
                                        <div className="flex justify-between items-start font-bold">
                                            <div className='flex gap-2'>
                                                <div className="flex"><HomeOutlined  className="h-7 w-7 bg-[#ECF4E9] color-[#ffffff] justify-center rounded-md" /></div>
                                                <div className="flex text-base"> Home Fund</div> 
                                            </div>
                                            <div className="flex"><MoreOutlined /></div>
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <Progress strokeColor="#1E4841" trailColor="#BBF49C" percent={50} showInfo={false} />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <div className='text-xs font-bold mr-1'>$5.000</div>
                                                <div className='text-xs'>50%</div>
                                            </div>
                                            <div className='flex'>
                                                <div className='text-xs mr-1'>Target: </div>
                                                <div className='text-xs'>Target: $10.000</div>
                                            </div>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                        </div>


                    </Card>
                </ConfigProvider>
            </div>
            
            {/* Center Section */}
            <ConfigProvider
                    theme={{
                        components: {
                            Card: {
                                bodyPadding: 16
                            },
                        },
                    }}
                >
            <div className="col-span-6 w-[566px] h-[888px]">
                <div className="gap-2 flex">
                    <div className='col-span-2'>
                        <Card className='rounded-2xl shadow-lg w-[183px] h-[174px]'>
                            <div className="flex justify-between items-center">
                                <div><DollarOutlined className='h-9 w-9 justify-center bg-[#ECF4E9] color-[#ffffff]' /></div>
                                <div><MoreOutlined /></div>
                            </div>
                            <div className='mt-8 flex flex-row gap-1 items-end justify-center bg-lime-500'>
                                <div><RiseOutlined /></div>
                                <div><PlusOutlined className='text-[8px]' /></div>
                                <div className='text-xs'>1.78%</div>
                            </div>
                        </Card>
                    </div>
                    <div className='col-span-2'>
                        <Card className='rounded-2xl shadow-lg w-[183px] h-[174px]'>
                            
                        </Card>
                    </div>
                    <div className='col-span-2'>
                        <Card className='rounded-2xl shadow-lg w-[183px] h-[174px]'>
                            
                        </Card>
                    </div>
                </div>
            </div>  
            </ConfigProvider>
                    
        </div>
    );
};

export default Dashboard;

