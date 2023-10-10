import React, { useState } from 'react';
import styles from './ContactForm.module.css';

import { message } from 'antd';

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                />
            </div>
            <div className={styles.inputGroup}>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                />
            </div>
            <div className={styles.inputGroup}>
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                ></textarea>
            </div>
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}

export default ContactForm;
