import React from 'react';
import { Layout ,Button} from 'antd';
import { Input } from 'antd';
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';

const { Header, Footer,  Content } = Layout;
export default class Login extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{height:"18vh",
                    backgroundColor: '#67a4e0'
                }}><h1>e-Bookstore</h1></Header>
                <Content style={
                    {height:450,
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }
                }>
                    <form style={
                        {   order:'2',
                            height:'88%',
                            width:370,
                            backgroundColor:'#9ab4ce',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center'
                        }
                    }>
                        <h1 style={{width:'80%',flex:'0.1',textAlign:'center'}}>用户登录</h1>
                        <Input size="large" placeholder="username"  prefix={<UserOutlined /> } style={{width:'80%',alignSelf:'space-around'}}/>
                        <Input.Password size="large" placeholder="input password" prefix={<UnlockOutlined />} style={{width:'80%',alignSelf:'space-around'}}/>
                        <h6 style={{width:'80%',flex:'0.1',textAlign:'right',}}>注册</h6>
                        <Button type="primary" style={{width:'80%',flex:'0.1',marginTop:0}} href='#/homepage'>
                            登录
                        </Button>

                    </form>
                    <div > <img src="http://img62.ddimg.cn/2021/3/19/202103191700054934.jpg"  style={{width:'90%'}}/></div>


                </Content>
                <Footer></Footer>
            </Layout>



        )
    }
}