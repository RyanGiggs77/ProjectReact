import React from 'react'
import Logo from '../assets/symbol.png';
import Union from '../assets/Union.png';
import { Card, ConfigProvider } from 'antd';
import { useAuth } from '../context/authContext';

const namecard = ({ name, balance, exp, cvv }) => {
    const { currentUser } = useAuth();
    const { user, userLoggedIn, setUserLoggedIn, loginWithGoogle } = useAuth();

    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        bodyPadding: 16
                    },
                },
            }}
        >
            <Card className="w-full h-[174px] bg-[#1E4841] text-white rounded-2xl shadow-lg !p-0">
                <div className="">
                    <div className="flex justify-between items-start">
                        <div className="flex ">
                            <img className="w-5 h-5" src={Logo} alt="logo" />
                        </div>
                        <div className="flex">
                            <img className="" src={Union} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4 text-xl font-bold font-family">
                {user?.displayName || user?.email || "Guest"}
                
                </div>
                <div className="flex justify-between items-end mt-2">
                    {/* Balance Amount */}
                    <div>
                        <div className="text-[10px] opacity-80">Balance Amount</div>
                        <div className="font-bold text-xl">{balance}</div>
                    </div>

                    {/* EXP dan CVV (rata kanan) */}
                    <div className="flex gap-4">
                        <div className=" text-[10px] opacity-80">
                            <div>EXP <br /><span className="text-white font-semibold">{exp}</span></div>
                        </div>
                        <div className=" text-[10px] opacity-80 ">
                            <div>CVV <br /><span className="text-white font-semibold">{cvv}</span></div>
                        </div>
                    </div>
                </div>
            </Card>
        </ConfigProvider>
    )
}

export default namecard