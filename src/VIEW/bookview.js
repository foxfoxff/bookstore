import React from 'react';
import 'antd/dist/antd.css'
import {Input, Image, Layout, BackTop, Carousel} from 'antd';
import Upnav from "../component/upnav";
import {Bookdetail} from "../components/bookdetail";

const { Header, Footer, Sider, Content } = Layout;
const {Search} =Input;


class BookView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: null};
    }

    componentDidMount() {
        let user = localStorage.getItem("user");
        this.setState({user: user});
        const query = this.props.location.search; /* url: e.g. localhost:3000/bookDetails?id=1 */
        const arr = query.split('&');
        const bookId = arr[0].substr(4); /* acquire the book id */
        this.setState({bookId: bookId});
        getBook(bookId, (data) => {
            this.setState({bookInfo: data})
        }) /* get the detailed info */
    }

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <Upnav/>
                </Header>
                <Layout>

                    <Content style={{padding: '0 50px'}}>
                        <div className="home-content">
                            <Bookdetail info={this.state.bookInfo}/> /* detailed book info */
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}