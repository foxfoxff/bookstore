import React from "react";
import AdminRow from "./adminrow";
import Cartcard from "./cartcard";
import {Button} from "antd";
import {Link} from "react-router-dom";
import {getCart} from "../service/bookService";
import Bookcard from "./bookcard";

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

class Cartcardrender extends React.Component{

}
export default class Cartlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: booklist1,
            sumprice: 298.7,
            cartdata:[]
        }
    }

     componentDidMount()
     {
          //this.setState({sumprice:this.state.data.price.substring(1).toNumber*this.state.data.num})
         const callback=(data)=>this.setState({cartdata:data})
         getCart(callback);

    }

    addprice = (price) => {
        let pre = this.state.sumprice;
        this.setState({

            sumprice: pre + price
        })
    }

    render() {
        let list=[];
        this.state.cartdata.forEach((item, index, array) => {

                let newnode= <Cartcard id={item}/>

                console.log(item);
                list.push(newnode);

        })
        console.log(this.state.cartdata);


        if (this.state.sumprice > 0)
            return (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',width:'100%',marginTop:20}}>
                  {/*  <Cartcard data={booklist1} addprice={this.addprice}/>
                    <Cartcard data={booklist2} addprice={this.addprice}/>
                    <Cartcard data={booklist3} addprice={this.addprice}/>
                    <Cartcard data={booklist4} addprice={this.addprice}/>
                    <Cartcard data={booklist5} addprice={this.addprice}/>
                    <div style={{
                        fontSize: 20,
                        color: 'red',
                        margin: '0 auto'
                    }}>Total:{this.state.sumprice.toFixed(2)}</div>*/}

                    {list}


                    <Link to ="/pay"><Button danger>结算</Button></Link>
                </div>


            )
        else return (
            <div style={{marginLeft:'500' ,width:'100%',textAlign:'center'}}>

                <div style={{marginTop:200,fontSize:25}}>购物车为空</div>


            </div>
        )
    }
}