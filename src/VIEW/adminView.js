import React from "react";
import {BackTop, Input, Layout} from "antd";
import Upnav from "../component/upnav";
import Sidemenu from "../component/sidemenu";
import Admin from "../component/admin";
import Bottom from "../component/footer";

const { Header, Footer, Sider, Content } = Layout;
export default class AdminView extends React.Component {


    render() {

        return (

            <Layout>

                <Header>
                    <Upnav/>
                </Header>
                <BackTop/>
                <Layout style={{minHeight:'85vh'}}>
                    <Sider theme={"light"}>
                        <Sidemenu/>
                    </Sider>
                    <Content>
                        <Admin  />
                    </Content>

                </Layout>
                <Bottom />
            </Layout>
        )
    }
}