import './Homescreen.css'

import {
  Divider,
  Layout, Space,
  Typography
} from 'antd'
import React from 'react'

import lonsdalephoto from '../images/chrislonsdale_landscape.jpg'

const { Content } = Layout
const { Title } = Typography

function Homescreen() {
  return (
    <Layout className="layout-min-height">
      <Content className="content-style">
        <Space direction="vertical" className="space-direction">
          <div className="flex-container">
            <Title level={2}>
                Working to Keep Liberty Safe
            </Title>
          </div>
          <div className="flex-container">
            <img src={lonsdalephoto} alt="Logo" className="campaign-image" />
          </div>
          <Divider />
        </Space>
      </Content>
    </Layout>)
}

export default Homescreen