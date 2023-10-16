import {
    DollarOutlined,
    HomeOutlined,
    IdcardOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/clonsdale_staterep.jpeg';
import './CustomHeader.css';

const { Header } = Layout;

function CustomHeader() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

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
                    <Menu.Item
                        key="1"
                        className="custom-menu-item"
                        style={{ width: '120px' }}
                        icon={<HomeOutlined />}
                        onClick={scrollToTop}
                    >
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        className="custom-menu-item"
                        style={{ width: '200px' }}
                        icon={<IdcardOutlined />}
                    >
                        <Link to="https://house.mo.gov/MemberDetails.aspx?year=2023&code=R&district=038&category=cosponsor">MO House Website</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        className="custom-menu-item"
                        style={{ width: '100px' }}
                        icon={<DollarOutlined />}
                    >
                        <Link to="https://secure.anedot.com/citizens-for-chris-lonsdale/donate">Donate</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    )
}

export default CustomHeader;
