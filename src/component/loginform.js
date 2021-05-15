import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import {Link} from'react-router-dom'
import { login} from '../service/userService'
import { UserOutlined,LockOutlined } from '@ant-design/icons';

 export  default  class LoginForm extends React.Component {



     onsubmit = (values) => {

         let pass={
             'username':values.username.toString(),
             'password':values.password.toString()
         }
         console.log("pass",pass)
         login(pass)

     };
     render() {

         return (
             <Form
                 name="normal_login"
                 className="login-form"
                 initialValues={{ remember: true }}
                onFinish={this.onsubmit}

             >
                 <Form.Item
                 >
                     <h1 style={{textAlign:'center'}}>LOG IN</h1>
                 </Form.Item>
                 <Form.Item
                     name={'username'}
                     rules={[{ required: true, message: 'Please input your Username!' }]}
                 >
                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                 </Form.Item>
                 <Form.Item
                     name={'password'}
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
                     <Button type="primary" htmlType="submit" className="login-form-button">
                         Log in
                     </Button>

                     <br/>Or <Link to="/register">register now!</Link>
                 </Form.Item>
             </Form>
         );
     }
}


