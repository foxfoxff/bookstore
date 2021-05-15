import React from 'react';
import { Layout ,Button,Card} from 'antd';
import 'antd/dist/antd.css';

import '../CSS/usedfont.css'

import Bottom from "../component/footer";
import LoginForm from "../component/loginform";
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
                    <LoginForm/>
                </Card>

                    <div > <img src="http://img62.ddimg.cn/2021/3/19/202103191700054934.jpg"  style={{width:'90%'}}/></div>

                </div>


            <Bottom/>



            </div>

        );
    }
}