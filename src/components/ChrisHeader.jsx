import {
    DollarOutlined,
    HomeOutlined,
    IdcardOutlined
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/clonsdale_staterep.jpeg';
import './CustomHeader.css';

const { Header } = Layout;
const { Text } = Typography

function CustomHeader() {
    return (
        <Header className="site-layout-background">
            <div className="header-right">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="header-logo" />
                </Link>
                <Menu
                    mode="horizontal"
                    className="disable-select custom-menu"
                >
                    <Menu.Item key="1" className="custom-menu-item"
                        icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" className="custom-menu-item"
                        icon={<IdcardOutlined />}>
                        <Link to="https://house.mo.gov/MemberDetails.aspx?year=2023&code=R&district=038&category=cosponsor">MO House Website</Link>
                    </Menu.Item>
                    <Menu.Item key="3" className="custom-menu-item"
                        icon={<DollarOutlined />}>
                        <Link to="https://secure.anedot.com/citizens-for-chris-lonsdale/donate">Donate Now</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    )
}

export default CustomHeader;
