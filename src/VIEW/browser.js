import React from 'react';
import 'antd/dist/antd.css'
import {Input, Image, Layout, BackTop, Carousel} from 'antd';
import Upnav from "../component/upnav";
import Sidemenu from "../component/sidemenu";


const { Header, Footer, Sider, Content } = Layout;
const {Search} =Input;

export default class Browser extends React.Component {


    render() {

        return (

            <Layout >

                <Header >
                    <Upnav />
                </Header>
                <BackTop />
                <Layout>
                    <Sider theme={"light"}>
                        <Sidemenu />
                    </Sider>
                    <Content>
                        <div style={{textAlign:'center',marginTop:'3%'}}>
                            <Search placeholder="input search text"  style={{ width: 400 ,height:100}} />
                        </div>






                    </Content>
                </Layout>




            </Layout>




        )
    }
}