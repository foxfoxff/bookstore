import React from 'react';
import 'antd/dist/antd.css'
import { Layout} from 'antd';
import Upnav from "../component/upnav";
import Bookdetail from "../component/bookdetail";
import Sidemenu from "../component/sidemenu";

const { Header, Footer, Sider, Content } = Layout;



class BookView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: null};
    }



    render() {
        const query = this.props.location.search; /* url: e.g. localhost:3000/bookDetails?id=1 */
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        return (
            <Layout className="layout">
                <Header>
                    <Upnav/>
                </Header>

                <Layout>
                    <Sider theme={"light"}>
                        <Sidemenu />
                    </Sider>
                    <Content style={{padding: '0 50px',height:'100vh',}}>
                        <div className="home-content" style={{marginTop:'5vh'}} >

                           <Bookdetail id={bookId} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default BookView;