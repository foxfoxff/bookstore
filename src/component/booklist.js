import React from "react";
import Bookcard from "./bookcard";
import {Progress, Tag, List, Breadcrumb} from 'antd';
import ProList from '@ant-design/pro-list';
import {Row,Col,Space} from 'antd'
import { Input} from 'antd';


const { Search } = Input;
export default class Booklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.bookline,

            flitter:""
        }
    }
 handleSearch=(e)=>{
        if(e!=null)
        this.setState({flitter:e})
     else this.setState({flitter:""})
 }

    render() {

        let list=[];
        this.state.data.forEach((item, index, array) => {
            if(item.bookname.toLowerCase().includes(this.state.flitter.toLowerCase())){
                let newnode={ content: <Bookcard src={item.src}
                                                 bookname={item.bookname}
                                                 writer={item.writer}
                                                 price={item.price}
                                                 id={item.id}/>}
                  list.push(newnode);
            }
        })

        return (
            <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{height:80,order:'1'}}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ width: 700 ,height:40}}
                        onSearch={this.handleSearch}

                    />
                    <Breadcrumb separator={"|"} style={{fontSize:2}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            csapp
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            vue
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            React
                        </Breadcrumb.Item>
                        Java
                        <Breadcrumb.Item>
                            {" "}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <List pagination={{defaultPageSize: 25, showSizeChanger: false}}
                      grid={{column: 5, gutter: 0,justify:'center'}}
                      dataSource={list} size="small"
                      renderItem={item => (
                          <List.Item>
                              {item.content}
                          </List.Item>
                      )}
                      style={{order:'2'}}
                />





            </div>



        )

    }
}
