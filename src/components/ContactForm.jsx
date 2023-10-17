import { FacebookOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactForm.module.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async () => {
        try {
            message.success('Email sent successfully');
        } catch (error) {
            message.error('Failed to send email');
        }
    };

    return (
        <div className={styles.form}>
            <div className={styles.flexContainer}>
                <Link to="https://www.facebook.com/CitizensForChrisLonsdale" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined style={{ fontSize: '2rem'}} />
                </Link>
            </div>
            <Form onFinish={handleSubmit}>
                <Form.Item>
                    <Input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.submitButton}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
    

export default ContactForm;
