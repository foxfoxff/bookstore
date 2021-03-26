import React from 'react';
import { Descriptions, Button } from 'antd';


const booklist1=[
    "https://img14.360buyimg.com/n1/s200x200_jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg",
    "HTML5+CSS3+JavaScript从入门到精通",
    "中国水利水电出版",
    "￥67.40",
    "1"

];
const booklist2=[
    "https://img14.360buyimg.com/n1/s200x200_jfs/t1/148121/18/9077/162549/5f6cc8beEbea70b6f/c6f63030adadbb26.jpg",
    "前端开发核心知识进阶：从夯实基础到突",
    "电子工业出版社",
    "￥68.10",
    "2"
];



export default class Bookdetail extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {


        if(this.props.id== "1"){
            return (
                <div className={"content"}>
                    <div className={"book-detail"}>
                        <div className={"book-image"}><img alt="image" src={booklist1[0]} style={{width:"350px", height:"350px"}}/></div>
                        <div className={"descriptions"}>
                            <Descriptions>
                                <Descriptions.Item className={"title"} span={3}>{booklist1[1]}</Descriptions.Item>
                                <Descriptions.Item label={"出版社"} span={3}>{booklist1[2]}</Descriptions.Item>
                                <Descriptions.Item label={"分类"} span={3}>互联网</Descriptions.Item>
                                <Descriptions.Item label={"定价"} span={3}>{booklist1[3]}</Descriptions.Item>
                                <Descriptions.Item label={"状态 "} span={3}>有货</Descriptions.Item>
                                <Descriptions.Item label={"作品简介"} span={3}>《前端开发核心知识进阶：从夯实基础到突破瓶颈》共分8部分，涵盖33个主题，内容涉及JavaScript基础强化、JavaScript语言进阶、不可忽视的HTML和CSS、前端框架、前端工程化、性能优化、编程思维和算法、网络知识等，聚焦前端开发基础知识和进阶技能，关注前端工程化和体系化，结构清晰，循序渐进，深入浅出。</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </div>
                    <div className={"button-groups"}>
                        <Button type="danger"  size={"large"}>
                            加入购物车
                        </Button>

                        <Button type="danger"  size={"large"} style={{marginLeft:"15%"}}ghost>
                            立即购买
                        </Button>
                    </div>
                </div>


            )
        }
        else{
            return (
                <div className={"content"}>
                    <div className={"book-detail"}>
                        <div className={"book-image"}><img alt="image" src={booklist2[0]} style={{width:"350px", height:"350px"}}/></div>
                        <div className={"descriptions"}>
                            <Descriptions>
                                <Descriptions.Item className={"title"} span={3}>{booklist2[1]}</Descriptions.Item>
                                <Descriptions.Item label={"出版社"} span={3}>{booklist2[2]}</Descriptions.Item>
                                <Descriptions.Item label={"分类"} span={3}>互联网</Descriptions.Item>
                                <Descriptions.Item label={"定价"} span={3}>{booklist2[3]}</Descriptions.Item>
                                <Descriptions.Item label={"状态 "} span={3}>有货</Descriptions.Item>
                                <Descriptions.Item label={"作品简介"} span={3}>好书</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </div>
                    <div className={"button-groups"}>
                        <Button type="danger" icon="shopping-cart" size={"large"}>
                            加入购物车
                        </Button>

                        <Button type="danger" icon="pay-circle" size={"large"} style={{marginLeft:"15%"}}ghost>
                            立即购买
                        </Button>
                    </div>
                </div>


            )



        }


    }

}
