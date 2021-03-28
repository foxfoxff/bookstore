import React from 'react';
import {Descriptions, Button, Space, InputNumber} from 'antd';


const booklist1={
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg",
    bookname:"HTML5+CSS3+JavaScript从入门到精通",
    writer:"中国水利水电出版",
    price:"￥67.40",
    id:"1"

};
const booklist2={
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t1/148121/18/9077/162549/5f6cc8beEbea70b6f/c6f63030adadbb26.jpg",
    bookname: "前端开发核心知识进阶：从夯实基础到突",
    writer: "电子工业出版社",
    price:"￥68.10",
    id:"2"
};
const booklist3= {

    src: "https://img10.360buyimg.com/n1/jfs/t1/130794/32/5254/450257/5f1bcc5eE3394bfc4/12b6576b310d1b18.png",
    bookname:"零基础自学web前端开发 HTML+CSS+JavaScript编程入门指南 网页设计与制作教程书籍",
    writer:"明日科技",
    price:"￥49.80",
    id:"3"
};
const booklist4= {

    src: "https://img13.360buyimg.com/n1/s200x200_10297/e3defe26-7924-4429-8f9f-2d9f4229455a.jpg",
    bookname:"毛泽东选集（套装全4册 普及本）",
    writer:"毛泽东 著",
    price:"￥56.70",
    id:"4"
};
const booklist5= {

    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t1/88306/3/4620/259118/5de865cdE6678a233/6193b6435bb973d1.jpg",
    bookname:"深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）",
    writer:"周志明 著",
    price:"￥56.70",
    id:"5"
};

const data=[booklist1,booklist2,booklist3,booklist4,booklist5];




export default class Bookdetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            num:1,
            bookid:this.props.id
        }


    }
    changeNum = (value)=>{
        this.setState({num:value})

    }


    render() {



            return (
                <div className={"content"}>
                    <div className={"book-detail"} style={{display:'flex'}}>
                        <div className={"book-image"}><img alt="image" src= {data[this.state.bookid-1].src} style={{width:"350px", height:"350px"}}/></div>
                        <div className={"descriptions"}>
                            <Descriptions>
                                <Descriptions.Item className={"title"} span={3}>{data[this.state.bookid-1].bookname}</Descriptions.Item>
                                <Descriptions.Item label={"出版社"} span={3}>{data[this.state.bookid-1].writer}</Descriptions.Item>
                                <Descriptions.Item label={"分类"} span={3}>互联网</Descriptions.Item>
                                <Descriptions.Item label={"定价"} span={3}>{data[this.state.bookid-1].price}</Descriptions.Item>
                                <Descriptions.Item label={"状态 "} span={3}>有货</Descriptions.Item>
                                <Descriptions.Item label={"作品简介"} span={3}>好书</Descriptions.Item>
                                </Descriptions>
                            <div className="def-number-input number-input">
                                    数量:
                                <InputNumber min={1} defaultValue={1} onChange={this.changeNum}/>

                            </div>
                        </div>
                    </div>
                    <div className={"button-groups"} style={{textAlign:'center'}}>
                        <Button type="danger"  size={"large"}>
                            加入购物车
                        </Button>

                        <Button type="danger"  size={"large"} style={{marginLeft:"15%"}}ghost>
                            立即购买
                        </Button>
                    </div>
                </div>


            )

       /* else{
            return (
                <div className={"content"}>
                    <div className={"book-detail"} style={{display:'flex'}}>
                        <div className={"book-image"}><img alt="image" src={booklist2[0]} style={{width:"350px", height:"350px"}}/></div>
                        <Space />
                        <div className={"descriptions"}>
                            <Descriptions>
                                <Descriptions.Item className={"title"} span={3}>{booklist2[1]}</Descriptions.Item>
                                <Descriptions.Item label={"出版社"} span={3}>{booklist2[2]}</Descriptions.Item>
                                <Descriptions.Item label={"分类"} span={3}>互联网</Descriptions.Item>
                                <Descriptions.Item label={"定价"} span={3}>{booklist2[3]}</Descriptions.Item>
                                <Descriptions.Item label={"状态 "} span={3}>有货</Descriptions.Item>
                                <Descriptions.Item label={"作品简介"} span={3}>好书</Descriptions.Item>
                            </Descriptions>

                                <div className="def-number-input number-input">
                                    数量:
                                    <InputNumber min={1} defaultValue={1} onChange={this.changeNum}/>

                                </div>

                        </div>
                    </div>

                    <div className={"button-groups"} style={{textAlign:'center'}}>
                        <Button type="danger"  size={"large"}>
                            加入购物车
                        </Button>

                        <Button type="danger"  size={"large"} style={{marginLeft:"15%"}}ghost>
                            立即购买
                        </Button>
                    </div>
                </div>


            )



        }*/


    }

}
