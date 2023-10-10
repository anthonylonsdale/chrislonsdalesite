import { Divider, Image, Layout, Typography } from 'antd';
import React from 'react';
import './Footer.css';

import logo from '../images/clonsdale_cmpnphoto.jpeg';

const { Footer } = Layout
const { Title } = Typography

function AppFooter() {
  return (
    <Footer className="footer">
      <Divider />
      <Image
        src={logo}
        alt="Logo"
        style={{width: '20rem'}}
        preview={false}
        />
      <Title level={5}>
        Paid for by Citizens for Chris Lonsdale
      </Title>
      <Title level={5}>
        Howard Lonsdale, Treasurer
      </Title>
    </Footer>
  )
}

export default AppFooter