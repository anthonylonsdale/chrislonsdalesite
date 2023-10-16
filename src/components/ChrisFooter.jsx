import {
  FacebookOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Image, Layout, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/clonsdale_staterep.jpeg';
import styles from './Footer.module.css';

const { Footer } = Layout
const { Title} = Typography

function AppFooter() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image
          src={logo}
          alt="Logo"
          style={{ width: '18rem' }}
          preview={false}
        />
        <div className={styles.buttonLikeText}>
          Paid for by Citizens for Chris Lonsdale. Howard Lonsdale, Treasurer.
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <MailOutlined className={styles.mailIcon} size='' />
            <div>
              <Title level={5} className={styles.footerText}>
                Chris.Lonsdale@house.mo.gov
              </Title>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FacebookOutlined className={styles.facebookIcon} />
            <div>
              <Title level={5} className={styles.footerText}>
                <Link
                  href="https://www.facebook.com/CitizensForChrisLonsdale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Citizens For Chris Lonsdale
                </Link>
              </Title>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default AppFooter;
