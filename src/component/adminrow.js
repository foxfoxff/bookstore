import React from 'react';
import  {Input,Card,InputNumber} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import "../CSS/input.css"

const { TextArea } = Input;



export default class AdminRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: this.props.data.edit,
            picture: props.data.src,
            bookname: props.data.bookname,
            key: props.data.key,
            writer: props.data.writer,
            src: props.data.src,
            num: props.data.num,
            price: props.data.price
        }
    }

    handleEdit = () => {
        this.setState({
            edit: true
        })
    }
    handleSave = () => {
        this.setState({
            edit: false,
            src: this.myInput.value,
            bookname: this.nameInput.value,
            writer: this.writerInput.value,
        })
        let newdata = {
            src: this.myInput.value,
            bookname: this.nameInput.value,
            writer: this.writerInput.value,
            price: this.state.price,
            num: 999,
            key: this.state.key,
        }
        this.props.changebook(newdata)
    }
    handleImg = () => {

        this.setState({
            src: this.myInput.value
        })

    }
    changeNum = (value) => {
        this.setState({num: value})


    }
    changePrice = (value) => {
        let a=""+value;
        this.setState({price: a})


    }
    handleDelete = () => {
        this.setState({num: -1});


    }


    render() {
        if (this.state.edit === false && this.state.num >= 0) {
            return (


                    <Card hoverable style={{ width: 1000,height:217}}
                          actions={[<a key="list-loadmore-edit" onClick={this.handleEdit}>edit</a>,
                              <a key="list-loadmore-more" onClick={this.handleDelete}>delete</a>]}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <img src={this.state.src} style={{width: 130}}/>
                            <div>{this.state.bookname}</div>
                            <div>{this.state.writer}</div>
                            <div>库存:{this.state.num}</div>
                            <div style={{fontSize: 20, color: 'red'}}>￥{this.state.price}</div>


                        </div>
                    </Card>



            )
        }


        if (this.state.edit === true && this.state.num >= 0) {

            return (
                <Card hoverable style={{ width: 1000}}
                      actions={[<a key="list-loadmore-edit" onClick={this.handleSave}>save</a>,
                          <a key="list-loadmore-more" onClick={this.handleDelete}>delete</a>]}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>图片地址：<input type="text" defaultValue={this.state.src} ref={(input) => {
                            this.myInput = input
                        }} onChange={this.handleImg}/></div>
                        <div>书名：<input type="text" defaultValue={this.state.bookname} ref={(input) => {
                            this.nameInput = input
                        }}/></div>
                        <div>作者：<input type="text" defaultValue={this.state.writer} ref={(input) => {
                            this.writerInput = input
                        }}/></div>
                        <InputNumber min={-1} defaultValue={this.state.num} onChange={value => this.changeNum(value)}/>

                        <div style={{fontSize: 20, color: 'red'}}>￥ <InputNumber min={-1} defaultValue={this.state.price} onChange={value => this.changePrice(value)}/></div>


                    </div>
                </Card>
            )

        }
        if (this.state.num < 0) return null

    }


}