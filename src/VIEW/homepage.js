import React from 'react';
import 'antd/dist/antd.css'
import { Input} from 'antd';
import { Carousel } from 'antd';
import { BackTop } from 'antd';
import { Layout } from 'antd';
import Sidemenu from "../component/sidemenu";
import Booktable from "../component/booktable"
import Upnav from "../component/upnav";
import Searchbar from "../component/search";



const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


const booklist1=[
    "https://img14.360buyimg.com/n1/s200x200_jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg",
    "HTML5+CSS3+JavaScript从入门到精通",
    "中国水利水电出版",
    "￥67.40",
    "1"

];
const booklist2=[
    "https://img14.360buyimg.com/n1/s200x200_jfs/t1/148121/18/9077/162549/5f6cc8beEbea70b6f/c6f63030adadbb26.jpg",
   "前端开发核心知识进阶：从夯实基础到突破瓶颈",
    "电子工业出版社",
    "￥68.10",
    "2"
];
export default class Homepage extends React.Component {


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
                <Content >
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                        <div style={{marginTop:'3%'}}>
                            <Searchbar />
                        </div>


                        <div className="showCircle" style={{marginTop:0,textAlign:'center'}}>
                            <Carousel autoplay  style={{textAlign:'center',width:800}}>
                                <div >
                                    <img
                                        width={750}
                                        height={300}

                                        src="http://img61.ddimg.cn/upload_img/00865/202103/750x315_zx_0315-1615948030.jpg"

                                    />
                                </div>
                                <div>
                                    <img
                                        width={750}
                                        height={300}
                                        src="http://img63.ddimg.cn/upload_img/00865/202102/03_nb_750_315-1614159185.jpg"
                                    />
                                </div>
                                <div>
                                    <img
                                        width={750}
                                        height={300}
                                        src="http://img60.ddimg.cn/upload_img/00478/0609/750x315-0322-rw-1616397633.jpg"
                                    />
                                </div>
                                <div>
                                    <img
                                        width={750}
                                        height={300}

                                        src="http://img63.ddimg.cn/ddimg/2416/750x315_gr0309-1615442873.jpg"
                                    />
                                </div>
                            </Carousel>
                        </div>


                        <Booktable  choose={true} First={booklist1}/>
                        <Booktable   choose={false} First={booklist2}/>
                    </div>

                    </Content>
            </Layout>

        </Layout>





        )
    }
}