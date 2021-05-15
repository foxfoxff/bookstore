import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout } from 'antd';
//引入导航栏相对应的组件
import '../CSS/up.css'
import {logout} from "../service/userService";


const { Content } = Layout;
class Upnav extends React.Component {
  constructor(props) {
      super(props);
      this.state={Authored:false}
  }

    render() {
        const user = JSON.parse(localStorage.getItem("user"));

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
                            {
                                user==null? <Link to="/login">
                                    登录
                                </Link>:  <a href="#" onClick={logout}>
                                    Log Out
                                </a>

                            }
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