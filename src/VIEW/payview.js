import React from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';

import { BackTop } from 'antd';
import { Layout} from 'antd';
import Sidemenu from "../component/sidemenu";

import Upnav from "../component/upnav";

import Pay from "../component/pay";
import Bottom from "../component/footer";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;



export default class Payview extends React.Component {


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
                        <Pay />

                </Layout>
                <Bottom />

            </Layout>


        )
    }
}