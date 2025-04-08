import React, { useState, useCallback, useEffect } from 'react';
import { Card, Row, Col, Modal, Form, Input, Upload, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Button from '../reused/compButton';
import { createClient } from '@supabase/supabase-js';

const { Meta } = Card;

// Initialize Supabase client
const supabaseUrl = 'https://ehwdpowxrjrwrfcqgmad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVod2Rwb3d4cmpyd3JmY3FnbWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NDgwOTcsImV4cCI6MjA1NzQyNDA5N30.o4XrY_z9eAUqKcspvID0z3hChA7ZGQQOWw11QT3GMXc';
const supabase = createClient(supabaseUrl, supabaseKey);

const Promo = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [promos, setPromos] = useState([]);
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, []);

    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    const handleOk = useCallback(async () => {
        try {
            const values = await form.validateFields();

            // Convert DatePicker values to ISO strings
            values.promo_start = values.promo_start.toISOString();
            values.promo_end = values.promo_end.toISOString();
            values.usage_period = values.usage_period.toISOString();

            // Ensure team_conditions and partners are arrays
            values.team_conditions = values.team_conditions.split(',').map(item => item.trim());
            values.partners = values.partners.split(',').map(item => item.trim());

            // Upload image to Supabase
            if (fileList.length > 0) {
                const file = fileList[0].originFileObj;
                const { data, error } = await supabase.storage
                    .from('coinest')
                    .upload(`public/${file.name}`, file);

                if (error) {
                    throw error;
                }

                const imageUrl = `${supabaseUrl}/storage/v1/object/public/${data.Key}`;
                values.image_url = imageUrl;
            }

            // Assuming you have an API endpoint to add a new promo
            const response = await fetch('https://react-express-backend.vercel.app/promos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            if (response.ok) {
                setPromos([...promos, data]);
                setIsModalVisible(false);
                setFileList([]);
            } else {
                console.error("Failed to add promo:", data.error);
            }
        } catch (error) {
            console.error("Error adding promo:", error);
        }
    }, [form, fileList, promos]);

    useEffect(() => {
        if (!isModalVisible) {
            setTimeout(() => form.resetFields(), 300);
        }
    }, [isModalVisible, form]);

    useEffect(() => {
        const fetchPromo = async () => {
            try {
                const response = await fetch('https://react-express-backend.vercel.app/promos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);    
                
                if (response.ok) {
                    setPromos(data);
                } else {
                    console.error("Failed to fetch promos:", data.error);
                }
            } catch (error) {
                console.error("Error fetching promos:", error);
            }
        };

        fetchPromo();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/promo/${id}`);
    };

    const handleFileChange = ({ fileList }) => {
        setFileList(fileList);
    };

    if (!promos) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="flex flex-row-reverse justify-between items-center mb-4">
                <Button Name="Add Promo" onClick={showModal} />
            </div>
            <Row gutter={[16, 16]}>
                {promos.length > 0 ? (
                    promos.map((item, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                style={{ width: 235, height: 276, borderRadius: 12 }}
                                cover={
                                    <img
                                        alt="Promo"
                                        src={item.image_url || "https://placehold.co/600x600"}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: 139,
                                            borderRadius: 20,
                                            padding: 12,
                                        }}
                                    />
                                }
                                onClick={() => handleCardClick(item.id)}
                            >
                                <Meta 
                                    title={item.promo_name} 
                                    description={
                                        <div style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}>
                                            {item.about}
                                        </div>
                                    } 
                                />
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No promo available</p>
                )}
            </Row>
            <Modal
                title="Add Promo"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose
            >
                <Form form={form} layout="vertical" name="promo">
                    <Form.Item
                        label="Promo Name"
                        name="promo_name"
                        rules={[{ required: true, message: 'Please input the promo name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Promo Start"
                        name="promo_start"
                        rules={[{ required: true, message: 'Please input the promo start date!' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Promo End"
                        name="promo_end"
                        rules={[{ required: true, message: 'Please input the promo end date!' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Usage Period"
                        name="usage_period"
                        rules={[{ required: true, message: 'Please input the usage period!' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Max Transaction"
                        name="max_transaction"
                        rules={[{ required: true, message: 'Please input the max transaction!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="About"
                        name="about"
                        rules={[{ required: true, message: 'Please input the about!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="How To"
                        name="how_to"
                        rules={[{ required: true, message: 'Please input the how to!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Team Conditions"
                        name="team_conditions"
                        rules={[{ required: true, message: 'Please input the team conditions!' }]}
                    >
                        <Input.TextArea placeholder="Separate conditions with commas" />
                    </Form.Item>
                    <Form.Item
                        label="Partners"
                        name="partners"
                        rules={[{ required: true, message: 'Please input the partners!' }]}
                    >
                        <Input placeholder="Separate partners with commas" />
                    </Form.Item>
                    <Form.Item
                        label="Upload Image"
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={e => e.fileList}
                    >
                        <Upload.Dragger
                            name="files"
                            beforeUpload={() => false}
                            onChange={handleFileChange}
                            fileList={fileList}
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Promo;