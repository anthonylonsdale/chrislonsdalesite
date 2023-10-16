import {
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Layout,
  Space,
  Typography
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';
import lonsdalephoto from '../images/chrislonsdale_landscape.jpg';
import lonsdalephoto3 from '../images/clonsdale_awardpresentation.jpg';
import lonsdalephoto4 from '../images/clonsdale_eaglescout.jpg';
import lonsdalephoto2 from '../images/clonsdale_legislatoroftheyear.jpg';
import replonsdale from '../images/replonsdale.jpg';
import './Homescreen.css';

const { Content } = Layout
const { Title, Paragraph } = Typography


function Homescreen() {
  return (
    <Layout className="layout-min-height">
      <Content className="content-style">
        <Space direction="vertical" className="space-direction">
          <div className="flex-container">
          <Col className="text-center">
            <Title level={2}>Proudly Representing Liberty</Title>
            <Link to="https://secure.anedot.com/citizens-for-chris-lonsdale/donate">
              <Button className="color-button">Donate</Button>
            </Link>
          </Col>
            <img style={{ width: '20rem', height: '25rem'}} src={replonsdale} alt="img3" />
          </div>
          <Divider />
          <div className="flex-container">
            <Title level={2} >
                Fighting for District 38
            </Title>
          </div>
          <div className="flex-container">
            <Carousel autoplay style={{ width: '800px', height: '500px', overflow: 'hidden', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="carousel-image" src={lonsdalephoto} alt="img1" />
              </div>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="carousel-image" src={lonsdalephoto2} alt="img2" />
              </div>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="carousel-image" src={lonsdalephoto3} alt="img3" />
              </div>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="carousel-image" src={lonsdalephoto4} alt="img4" />
              </div>
            </Carousel>
          </div>
          <Divider />
          <div className="flex-container">
            <Title level={2}>
                Legislative Information
            </Title>
          </div>
          <div className="flex-container">
            <Card bordered={false} style={{ width: 300, marginTop: 16 }} >
              <Paragraph><strong>Address:</strong><br/>
                MO House of Representatives<br/>
                201 West Capitol Avenue<br/>
                Room 116A-1<br/>
                Jefferson City MO 65101
              </Paragraph>
              <Paragraph><strong>Legislator Assistant:</strong> LaTonya Percival</Paragraph>
              <Paragraph><strong>Office Hours:</strong> Tuesday and Wednesday, 7:30 a.m.-5:30 p.m. and Thursday, 7:30 a.m. - 11:30 a.m.</Paragraph>
              <Paragraph><strong>Phone:</strong> 573-751-2238</Paragraph>
              <Paragraph><strong>E-Mail:</strong> Chris.Lonsdale@house.mo.gov</Paragraph>
            </Card>
            <Card bordered={false} style={{ width: 300, marginTop: 16 }}>
              <Paragraph><strong>Committee Assignments</strong></Paragraph>
              <Paragraph><strong><a href="https://house.mo.gov/Committees.aspx?category=all&committee=2875&year=2023&code=R%20&cluster=true" target="_blank" rel="noopener noreferrer">Local Government</a></strong></Paragraph>
              <Paragraph><strong><a href="https://house.mo.gov/Committees.aspx?category=all&committee=2884&year=2023&code=R%20&cluster=true" target="_blank" rel="noopener noreferrer">Utilities</a></strong></Paragraph>
              <Paragraph><strong><a href="https://house.mo.gov/Committees.aspx?category=all&committee=2894&year=2023&code=R%20&cluster=true" target="_blank" rel="noopener noreferrer">Special Committee on Government Accountability</a></strong></Paragraph>
              <Paragraph><strong><a href="https://house.mo.gov/Committees.aspx?category=all&committee=2896&year=2023&code=R%20&cluster=true" target="_blank" rel="noopener noreferrer">Special Committee on Tourism</a></strong></Paragraph>
            </Card>
          </div>
          <Divider />
          <div className="flex-container">
            <Title level={2}>
                Contact Me
            </Title>
          </div>
          <ContactForm />
        </Space>
      </Content>
    </Layout>)
}

export default Homescreen