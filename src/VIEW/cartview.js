import React from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';

import { BackTop } from 'antd';
import { Layout } from 'antd';
import Sidemenu from "../component/sidemenu";
import Booktable from "../component/booktable"
import Upnav from "../component/upnav";
import Cartlist from "../component/Cartlist";
import Bottom from "../component/footer";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;



export default class Cart extends React.Component {


    render() {

        return (

            <Layout>

                <Header>
                    <Upnav/>
                </Header>
                <BackTop/>
                <Layout style={{minHeight: '90vh'}}>
                    <Sider theme={"light"}>
                        <Sidemenu/>
                    </Sider>

                    <Cartlist/>


                </Layout>
                <Bottom/>


            </Layout>


        )
    }
}