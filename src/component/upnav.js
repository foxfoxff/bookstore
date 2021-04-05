import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout } from 'antd';
//引入导航栏相对应的组件
import '../CSS/up.css'
const { Content } = Layout;
class Upnav extends React.Component {


    render() {
        return (
            <div className="header" id="header">
                <div className="brand" >
                    <Link to="/homepage">
                        e-bookstore
                    </Link>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/">
                                登录
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                注册
                            </Link>
                        </li>
                        <li>
                            <Link to="/">

                                个人中心
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                关于网站
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Upnav;