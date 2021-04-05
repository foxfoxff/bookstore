import React from "react";
import {Steps, Card, Button, InputNumber} from 'antd';
import {
    ShoppingCartOutlined,
    SolutionOutlined,
    PayCircleOutlined,
    SmileOutlined,
    CloseOutlined
} from '@ant-design/icons';
import "../CSS/input.css"
import {List} from "antd";
import Bookcard from "./bookcard";
import {Link} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
const { Step } = Steps;



const booklist1={
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg",
    bookname:"HTML5+CSS3+JavaScript从入门到精通",
    writer:"中国水利水电出版",
    kind:"前端",
    price:"67.40",
    id:"1"

};
const booklist2={
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t1/148121/18/9077/162549/5f6cc8beEbea70b6f/c6f63030adadbb26.jpg",
    bookname: "前端开发核心知识进阶：从夯实基础到突破瓶颈",
    writer: "电子工业出版社",
    kind:"前端",
    price:"68.10",
    id:"2"
};
const booklist3= {

    src: "https://img10.360buyimg.com/n1/jfs/t1/130794/32/5254/450257/5f1bcc5eE3394bfc4/12b6576b310d1b18.png",
    bookname:"零基础自学web前端开发 HTML+CSS+JavaScript编程入门指南 网页设计与制作教程书籍",
    writer:"明日科技",
    kind:"前端",
    price:"49.80",
    id:"3"
};
const booklist4= {

    src: "https://img13.360buyimg.com/n1/s200x200_10297/e3defe26-7924-4429-8f9f-2d9f4229455a.jpg",
    bookname:"毛泽东选集（套装全4册 普及本）",
    writer:"毛泽东 著",
    kind:"文学",
    price:"56.70",
    id:"4"
};
const booklist5= {

    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t1/88306/3/4620/259118/5de865cdE6678a233/6193b6435bb973d1.jpg",
    bookname:"深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）",
    writer:"周志明 著",
    kind:"后端",
    price:"56.70",
    id:"5"
};
const books=[booklist1,booklist2,booklist3,booklist4,booklist5];

 class Paykcard extends React.Component {
    render() {

        return (


            <Card  style={{marginLeft:'10%'}} hoverable bordered={true} >
                <div style={{display:'flex',justifyContent:'space-between',width:480,alignItems:'center'}}>
                    <img src={this.props.src} style={{width:50}}/>
                    <div>{this.props.bookname}</div>
                    <div >{this.props.writer}</div>

                    <div style={{fontSize:15,color:'red'}}>￥{this.props.price}</div>


                </div>
                </Card>



        )
    }
}

export default class Pay extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:books
        }
    }

  render() {
      let list=[];
      this.state.data.forEach((item, index, array) => {
              let newnode={ content: <Paykcard src={item.src}
                                               bookname={item.bookname}
                                               writer={item.writer}
                                               price={item.price}
                                               id={item.id}
                                                />}
              list.push(newnode);

      })
        return(
            <Card style={{margin:'0 auto',marginTop:40,width:'80%'}} >
                <Steps style={{margin:'0 auto',marginTop:40}}>
                    <Step status="finish" title="Selection" icon={<ShoppingCartOutlined />} />
                    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                    <Step status="wait" title="Pay" icon={<PayCircleOutlined />} />
                    <Step status="wait" title="Done" icon={<SmileOutlined />} />
                </Steps>
                <div style={{display:'flex',justifyContent:'end'}}>
                    <div style={{width:300}}></div>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                        <div> 收货人:<input /></div>
                        <div> 联系方式:<input /></div>
                        <div> 地址:<input /></div>

                        <div>备注：<TextArea style={{width:400}} /></div>
                        <div><h3>总价：￥298.7</h3></div>
                        <Button>立即支付</Button>
                    </div>
                    <div style={{width:600}}></div>
                    <List
                        header={<div style={{textAlign:"center"}}>购物清单</div>}
                        style={{marginRight:0}}
                        dataSource={list} size="small"
                        renderItem={item => (
                            <List.Item>
                                {item.content}
                            </List.Item>
                        )}
                    />


                </div>




            </Card>

        )

  }


}