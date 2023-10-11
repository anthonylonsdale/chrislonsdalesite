import {
  Card,
  Carousel,
  Divider,
  Layout,
  List,
  Space,
  Typography
} from 'antd';
import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import lonsdalephoto from '../images/chrislonsdale_landscape.jpg';
import lonsdalephoto3 from '../images/clonsdale_awardpresentation.jpg';
import lonsdalephoto4 from '../images/clonsdale_eaglescout.jpg';
import lonsdalephoto2 from '../images/clonsdale_legislatoroftheyear.jpg';
import './Homescreen.css';

const { Content } = Layout
const { Title, Paragraph } = Typography

const BillList = () => {
  const bills = [
    { id: 'HB 1016', description: 'Allows county prosecutors to be removed by the Attorney General', link: 'https://house.mo.gov/Bill.aspx?bill=HB1016&year=2023&code=R' },
    { id: 'HB 1199', description: 'Places a limit on the growth in assessments of residential real property', link: 'https://house.mo.gov/Bill.aspx?bill=HB1199&year=2023&code=R' },
    { id: 'HB 1200', description: 'Establishes the Interstate 70 Improvement Fund and requires certain deposits into the fund', link: 'https://house.mo.gov/Bill.aspx?bill=HB1200&year=2023&code=R' },
    { id: 'HB 1202', description: 'Requires all elections for local tax increases to be held at a general or primary election', link: 'https://house.mo.gov/Bill.aspx?bill=HB1202&year=2023&code=R' },
    { id: 'HB 1203', description: 'Modifies provisions relating to local elections', link: 'https://house.mo.gov/Bill.aspx?bill=HB1203&year=2023&code=R' },
    { id: 'HB 1206', description: 'Modifies provisions relating to income tax exemptions for certain retirement benefits', link: 'https://house.mo.gov/Bill.aspx?bill=HB1206&year=2023&code=R' },
    { id: 'HB 1230', description: 'Prohibits business entities incorporated outside the state of Missouri from purchasing more than three single-family residences located in this state', link: 'https://house.mo.gov/Bill.aspx?bill=HB1230&year=2023&code=R' },
    { id: 'HB 1384', description: 'Modifies provisions relating to telemedicine', link: 'https://house.mo.gov/Bill.aspx?bill=HB1384&year=2023&code=R' },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={bills}
      renderItem={bill => (
        <List.Item>
          <List.Item.Meta
            title={<a href={bill.link} target="_blank" rel="noopener noreferrer">{bill.id}</a>}
            description={bill.description}
          />
        </List.Item>
      )}
    />
  );
};



function Homescreen() {
  return (
    <Layout className="layout-min-height">
      <Content className="content-style">
        <Space direction="vertical" className="space-direction">
          <div className="flex-container">
            <Title level={2} >
                Working for Liberty Residents
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
            <Card
              bordered={false}
              style={{
                width: 300,
                marginTop: 16,
                height: 400,
                overflowY: 'auto'
              }}
            >
              <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly'}}>
                <Title level={4}>
                    Sponsored Bills
                </Title>
              </div>
              <BillList />
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