import React from 'react';
import {Descriptions, Button, Space, InputNumber} from 'antd';
import {add2Cart, getBookById} from "../service/bookService";




export default class Bookdetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
           book:null
        }

    }
    handleBookInfo = data => {
        this.setState({
            bookname: data.name,
            price: data.price,
            src: data.image,
            bookid:data.id,
            description: data.description,
            writer: data.author,
            type:data.type,
            left:data.age
        }, () => {
        });
    };
    componentDidMount() {
        getBookById(this.props.id, this.handleBookInfo);

    }

    render() {



            return (
                <div className={"content"}>
                    <div className={"book-detail"} style={{display:'flex'}}>
                        <div className={"book-image"}><img alt="image" src= {this.state.src} style={{width:"350px", height:"350px"}}/></div>
                        <div className={"descriptions"}>
                            <Descriptions style={{marginLeft:100}}>
                                <Descriptions.Item className={"title"} span={3}>{this.state.bookname}</Descriptions.Item>
                                <Descriptions.Item label={"出版社"} span={3}>{this.state.writer}</Descriptions.Item>
                                <Descriptions.Item label={"分类"} span={3}>{this.state.type}</Descriptions.Item>
                                <Descriptions.Item label={"定价"} span={3}>{this.state.price}</Descriptions.Item>
                                <Descriptions.Item label={"库存 "} span={3}>{this.state.left}</Descriptions.Item>
                                <Descriptions.Item label={"作品简介"} span={3}>{this.state.description}</Descriptions.Item>
                                </Descriptions>
                            {/*<div className="def-number-input number-input" style={{marginLeft:100}}>
                                    数量:
                                <InputNumber min={0} defaultValue={1} onChange={value =>  this.changeNum(value)}  />

                                <div style={{marginTop:15}}> 总价:<span style={{color:'red'}}>￥{this.state.sumprice}</span></div>
                            </div>*/}

                        </div>
                    </div>
                    <div className={"button-groups"} style={{textAlign:'center'}}>
                        <Button type="danger"  size={"large"} onClick={add2Cart(this.state.bookid,(data)=>console.log(data))}  >
                            加入购物车
                        </Button>
                        <Button type="danger"  size={"large"} style={{marginLeft:"15%"}}ghost>
                            立即购买
                        </Button>
                    </div>
                </div>


            )




    }

}
