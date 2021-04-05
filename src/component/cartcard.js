import React from "react";
import {Card, InputNumber, Popconfirm} from 'antd';
import { Statistic } from 'antd';
import {CloseOutlined} from "@ant-design/icons";
import ProCard from '@ant-design/pro-card';

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
export  default class Cartcard extends React.Component{
    constructor(props) {
        super(props);
     this.state={
         price:props.data.price,
         num:1,
         sumprice:props.data.price,
         id:props.data.id
     }

    }



    changeNum = (value)=> {

        if (value <this.state.num) {this.props.addprice(-this.state.price*1);}
        else if(value>this.state.num){this.props.addprice(this.state.price*1);}
        this.setState({num: value, sumprice: (value * this.state.price).toFixed(2)})

    }
    handleDelete = ()=>{
        this.props.addprice(-this.state.sumprice*1);
        this.setState({num:0,sumprice:0});
    }


    render(){

            if(this.state.sumprice>0){
                return(
                    <Card hoverable style={{marginLeft:'10%'}} >
                        <div style={{display:'flex',justifyContent:'space-between',width:900,alignItems:'center'}}>
                            <img src={this.props.data.src} style={{width:120}}/>
                            <div>{this.props.data.bookname}</div>
                            <div >{this.props.data.writer}</div>
                            <InputNumber min={0} defaultValue={1} onChange={value => this.changeNum(value)}  />
                            <div style={{fontSize:20,color:'red'}}>￥{this.state.sumprice}</div>
                            <CloseOutlined onClick={this.handleDelete}/>

                        </div>
                    </Card>
                )

            }



            else  return null;


    }





}