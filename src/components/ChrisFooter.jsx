import { Image, Layout, Typography } from 'antd';
import React from 'react';
import styles from './Footer.module.css';

import logo from '../images/clonsdale_cmpnphoto.jpeg';

const { Footer } = Layout
const { Title } = Typography

function AppFooter() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image
          src={logo}
          alt="Logo"
          style={{ width: '20rem' }}
          preview={false}
        />
        <div>
          <Title level={5} className={styles.footerText}>
            Paid for by Citizens for Chris Lonsdale
          </Title>
        </div>
        <div>
          <Title level={5} className={styles.footerText}>
            Howard Lonsdale, Treasurer
          </Title>
        </div>
      </div>
    </Footer>
  );
}

export default AppFooter
