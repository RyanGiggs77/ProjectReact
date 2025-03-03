import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Modal, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Button from '../reused/compButton';
import { addPromo } from '../redux/slice/promoSlice';

const { Meta } = Card;

const Promo = () => {
    const dispatch = useDispatch();

    
    const promo = useSelector((state) => state.promo.data);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, []);

    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    const handleOk = useCallback(() => {
        form.validateFields().then((values) => {
            const newPromo = {
                id: promo.length + 1,
                ...values,
            };
            dispatch(addPromo(newPromo));
            setIsModalVisible(false);
        });
    }, [form, dispatch]);

    useEffect(() => {
        if (!isModalVisible) {
            setTimeout(() => form.resetFields(), 300);
        }
    }, [isModalVisible, form]);

    return (
        <div>
            <div className="flex flex-row-reverse justify-between items-center mb-4">
                <Button Name="Add Promo" onClick={showModal} />
            </div>
            <Row gutter={[16, 16]}>
                {promo.length > 0 ? (
                    promo.map((item, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                style={{ width: 286, height: 276, borderRadius: 12 }}
                                cover={
                                    <img
                                        alt="Promo"
                                        src="https://placehold.co/600x400"
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: 139,
                                            borderRadius: 20,
                                            padding: 12,
                                        }}
                                    />
                                }
                            >
                                <Meta title={item.title} description={item.description} />
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
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input the title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input the description!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Dragger">
                        <Form.Item name="dragger" valuePropName="fileList" noStyle>
                            <Upload.Dragger name="files" disabled>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Promo;
