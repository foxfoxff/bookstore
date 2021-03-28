import React from 'react';
import { Menu} from 'antd';
import {HomeOutlined, ProfileOutlined, ReadOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";



export default class Sidemenu extends React.Component {
    render() {
        return (

            <Menu style={{textAlign:'center'}} >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to={"./homepage"}/>
                    网站首页
                </Menu.Item>
                <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                    我的购物车
                </Menu.Item>
                <Menu.Item key="3" icon={<ProfileOutlined />}>
                    我的订单
                </Menu.Item>
                <Menu.Item key="4" icon={<ReadOutlined />}>
                     <Link to="./browser">
                         所有图书
                </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                    个人中心
                </Menu.Item>

            </Menu>

        )
    }
}