import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import VoucherCard from "../reused/VoucherCard";
import Facebook from "../assets/FacebookLogo.svg";
import Instagram from "../assets/InstagramLogo.svg";
import Twitter from "../assets/TwitterLogo.svg";
import Link from "../assets/Link.svg";
import { Button, Card, ConfigProvider } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const Promo_id = () => {
    const { id } = useParams();
    const [promo, setPromo] = useState(null);

    useEffect(() => {
        const fetchPromo = async () => {
            try {
                const response = await fetch(`https://react-express-backend.vercel.app/promos/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                if (response.ok) {
                    setPromo(data);
                } else {
                    console.error("Failed to fetch promo:", data.error);
                }
            } catch (error) {
                console.error("Error fetching promo:", error);
            }
        };

        fetchPromo();
    }, [id]);

    if (!promo) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col gap-6 p-2">
            {/* Gambar Promo */}
            <div className="flex justify-center items-center h-[450px] bg-gray-200 rounded-xl">
                <img src="https://placehold.co/1000x450" alt="promo" className="max-w-full max-h-full object-contain rounded-xl" />
            </div>

            {/* Informasi Promo */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mx-8">
                <div className="col-span-12 md:col-span-9">
                    <h1 className="text-2xl font-bold">{promo.promo_name}</h1>

                    {/* Detail Promo */}
                    <div className="mt-4 space-y-2 text-gray-700">
                        <div className="flex justify-between">
                            <span className="font-medium">Promo Period</span>
                            <span>{moment(promo.promo_start).format('MMM D')} - {moment(promo.promo_end).format('MMM D, YYYY')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Usage Period</span>
                            <span>During the promo and completed by {moment(promo.usage_period).format('MMM D, YYYY')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Minimum Transaction</span>
                            <span>${promo.max_transaction}</span>
                        </div>
                    </div>

                    {/* Garis pembatas */}
                    <hr className="my-4 border-gray-300" />

                    {/* Deskripsi Promo */}
                    <h2 className="text-lg font-bold">About</h2>
                    <p className="text-gray-600">
                        {promo.about}
                    </p>

                    {/* Cara menggunakan */}
                    <h2 className="mt-4 text-lg font-bold">How To</h2>
                    <p className="text-gray-600">
                        {promo.how_to}
                    </p>

                    {/* Syarat & Ketentuan */}
                    <h2 className="mt-4 text-lg font-bold">Terms & Conditions</h2>
                    <ul className="list-disc list-inside text-gray-600 ml-2">
                        {promo.team_conditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>

                    {/* Partners */}
                    <h2 className="mt-4 text-lg font-bold">Partners</h2>
                    <ul className="list-disc list-inside text-gray-600 ml-2">
                        {promo.partners.map((partner, index) => (
                            <li key={index}>{partner}</li>
                        ))}
                    </ul>

                    {/* Voucher Cards */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <VoucherCard code="TRAVEL3X" description="Valid for Hotels, Flights, and Experiences" />
                        <VoucherCard code="GOTRAVEL" description="Valid for Airport Transfer and Car Rental" />
                    </div>
                </div>

                {/* Sidebar Kanan */}
                <div className="col-span-12 md:col-span-3">
                    {/* Share Buttons */}
                    <h2 className="text-lg font-bold">Share</h2>
                    <div className="flex flex-row gap-4 mt-2">
                        <Button icon={<img src={Link} alt="Link" />} className="bg-[#ECF4E9] text-black px-4 py-2 rounded" onClick={() => window.open('https://example.com', '_blank')} />
                        <Button icon={<img src={Facebook} alt="Facebook" />} className="bg-[#ECF4E9] text-black px-4 py-2 rounded" onClick={() => window.open('https://example.com', '_blank')} />
                        <Button icon={<img src={Instagram} alt="Instagram" />} className="bg-[#ECF4E9] text-black px-4 py-2 rounded" onClick={() => window.open('https://example.com', '_blank')} />
                        <Button icon={<img src={Twitter} alt="Twitter" />} className="bg-[#ECF4E9] text-black px-4 py-2 rounded" onClick={() => window.open('https://example.com', '_blank')} />
                    </div>

                    {/* Garis pembatas */}
                    <hr className="my-4 border-gray-300" />

                    {/* Related Promos */}
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-lg font-bold">Related Promos</h2>
                        <MoreOutlined />
                    </div>

                    <ConfigProvider
                        theme={{
                            components: {
                                Card: {
                                    bodyPadding: 0
                                },
                            },
                            token: {
                                colorBorderSecondary: "#ffffff"
                            }
                        }}
                    >
                        {/* Cards for Related Promos */}
                        <Card
                            hoverable
                            style={{ borderRadius: 12, marginTop: 12 }}
                            cover={
                                <img
                                    alt="Promo"
                                    src="https://placehold.co/200x150"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 150,
                                        borderRadius: 12,
                                    }}
                                />
                            }
                        >
                            <h3 className="text-md font-bold mt-2">Hotel Upgrade Offers</h3>
                            <p className="text-gray-500 mt-2">Accommodation</p>
                        </Card>

                        <Card
                            hoverable
                            style={{ borderRadius: 12, marginTop: 12 }}
                            cover={
                                <img
                                    alt="Promo"
                                    src="https://placehold.co/200x150"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 150,
                                        borderRadius: 12,
                                    }}
                                />
                            }
                        >
                            <h3 className="text-md font-bold mt-2">Weekend Getaway Deals</h3>
                            <p className="text-gray-500 mt-2">Travel</p>
                        </Card>

                        <Card
                            hoverable
                            style={{ borderRadius: 12, marginTop: 12 }}
                            cover={
                                <img
                                    alt="Promo"
                                    src="https://placehold.co/200x150"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 150,
                                        borderRadius: 12,
                                    }}
                                />
                            }
                        >
                            <h3 className="text-md font-bold mt-2">Hotel Upgrade Offers</h3>
                            <p className="text-gray-500 mt-2">Accommodation</p>
                        </Card>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};

export default Promo_id;