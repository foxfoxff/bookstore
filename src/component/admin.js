import React from "react";
import AdminRow from "./adminrow";

import { Button, Input, List, Pagination} from "antd";

const booklist1={
    edit:false,
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg",
    bookname:"HTML5+CSS3+JavaScript从入门到精通",
    writer:"中国水利水电出版",
    price:"67.40",
    num:999,
    key:"1"

};
const booklist2={
    edit:false,
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t1/148121/18/9077/162549/5f6cc8beEbea70b6f/c6f63030adadbb26.jpg",
    bookname: "前端开发核心知识进阶：从夯实基础到突破瓶颈",
    writer: "电子工业出版社",
    price:"68.10",
    num:999,
    key:"2"
};
const booklist3= {
    edit:false,
    src: "https://img10.360buyimg.com/n1/jfs/t1/130794/32/5254/450257/5f1bcc5eE3394bfc4/12b6576b310d1b18.png",
    bookname:"零基础自学web前端开发 HTML+CSS+JavaScript编程入门指南 网页设计与制作教程书籍",
    writer:"明日科技",
    price:"49.80",
    num:999,
    key:"3"
};
const booklist4= {
    edit:false,
    src: "https://img13.360buyimg.com/n1/s200x200_10297/e3defe26-7924-4429-8f9f-2d9f4229455a.jpg",
    bookname:"毛泽东选集（套装全4册 普及本）",
    writer:"毛泽东 著",
    price:"56.70",
    num:999,
    key:"4"
};
const booklist5= {
    edit:false,
    src: "https://img14.360buyimg.com/n1/s200x200_jfs/t1/88306/3/4620/259118/5de865cdE6678a233/6193b6435bb973d1.jpg",
    bookname:"深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）",
    writer:"周志明 著",
    price:"56.70",
    num:999,
    key:"5"
};
const data=[booklist1,booklist2,booklist3,booklist4,booklist5];
const {Search} =Input


export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookdata: data,
            filter:""
        }
    }

    addbook = () => {
        data.push({
            edit: true,
            src: "",
            bookname: "",
            writer: "",
            price: "",
            num: 1,
            key: "4"
        })
        this.setState({
                bookdata: data,
            }
        )
    }
    changeBook = (item) => {
        let tar = data.findIndex((dat) => (dat.key === item.key));
        data[tar] = item
        this.setState({
                bookdata: data,
            }
        )
    }

    handleSearch = (value)=>{
        this.setState({filter:value})
    }


    render() {


        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Search style={{width: 600, marginTop: 20, marginBottom: 20 }}
                        placeholder="input search text"
                        allowClear
                        onSearch={this.handleSearch}/>

                {this.state.bookdata.map((item) =>

                  item.bookname.toLowerCase().includes(this.state.filter.toLowerCase()) ? <AdminRow data={item} changebook={this.changeBook}/>:null

                )}

                <Button onClick={this.addbook} style={{marginTop: 20, width: 1000}} type="primary" ghost>添加</Button>
                <div style={{height: 300}}> footer</div>
            </div>


        )

    }


}







