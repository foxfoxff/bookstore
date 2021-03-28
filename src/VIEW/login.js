import React from 'react';
import { Layout ,Button,Card} from 'antd';
import 'antd/dist/antd.css';
import { Input,Form,Checkbox} from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import '../CSS/signin.css'
import {Link} from "react-router-dom";

const { Header, Footer,  Content } = Layout;
export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Header style={{height:"18vh",
                    backgroundColor: '#67a4e0'
                }}><h1 style={{fontFamily:'Indie Flower',fontSize:'50px',marginTop:'25px',marginLeft:'15vw'}}>e-Bookstore</h1>
                </Header>

                <div style={{display:'flex',alignItems:'center',
                    justifyContent:'center',height:'800'}}>
                    <Card style={{order:'1',width:350,height:400}}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}


                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <h1 style={{textAlign:'center'}}>LOG IN</h1>
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Link to="/homepage"> <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button></Link>

                            <br/>Or <Link to="/register">register now!</Link>
                        </Form.Item>
                    </Form>
                </Card>

                    <div > <img src="http://img62.ddimg.cn/2021/3/19/202103191700054934.jpg"  style={{width:'90%'}}/></div>

                </div>




            </div>

        );
    }
}