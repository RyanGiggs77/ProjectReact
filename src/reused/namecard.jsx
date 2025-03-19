import React, { useState, useEffect } from 'react';
import Logo from '../assets/symbol.png';
import Union from '../assets/Union.png';
import { Card, ConfigProvider } from 'antd';
import { useAuth } from '../context/authContext';

const NameCard = () => {
    const { user, accessToken } = useAuth(); // Ambil data user dari context
    const [account, setAccount] = useState(null); // State untuk menyimpan data akun

    console.log(accessToken);

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await fetch('https://react-express-backend.vercel.app/account', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`, 
                        'Content-Type': 'application/json'
                    }
                });

                console.log("Response status:", response.status);

                const data = await response.json();
                console.log("Response data:", data);

                if (response.ok) {
                    setAccount(data);
                } else {
                    console.error("Failed to fetch account:", data.error);
                }
            } catch (error) {
                console.error("Error fetching account:", error);
            }
        };

        if (user) {
            console.log("User tersedia, memanggil fetchAccount:", user);
            fetchAccount();
        } else {
            console.log("User belum tersedia.");
        }
    }, [user, accessToken]); // ✅ Tambahkan dependency array untuk mencegah infinite loop

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
                        <div className="flex">
                            <img className="w-5 h-5" src={Logo} alt="logo" />
                        </div>
                        <div className="flex">
                            <img className="" src={Union} alt="logo" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-4 text-xl font-bold">
                    {user?.displayName || user?.email || "Guest"}
                </div>

                <div className="flex justify-between items-end mt-2">
                    {/* Balance Amount */}
                    <div>
                        <div className="text-[10px] opacity-80">Balance Amount</div>
                        <div className="font-bold text-xl">${account?.balance || '0.00'}</div>
                    </div>

                    {/* EXP dan CVV (rata kanan) */}
                    <div className="flex gap-4">
                        <div className="text-[10px] opacity-80">
                            <div>EXP <br /><span className="text-white font-semibold">{account?.xp || '-'}</span></div>
                        </div>
                        <div className="text-[10px] opacity-80">
                            <div>CVV <br /><span className="text-white font-semibold">{account?.cvv || '-'}</span></div>
                        </div>
                    </div>
                </div>
            </Card>
        </ConfigProvider>
    );
};

export default NameCard;