import React from "react";
import Bookcard from "./bookcard";
import { Progress, Tag } from 'antd';
import ProList from '@ant-design/pro-list';
import {Row,Col,Space} from 'antd'
/*class Bookline extends React.Component{
    render() {
        return(

            <Row>
                <Space>
                    <Col>

                        <Bookcard  src={this.props.books[0].src}
                                   bookname={this.props.books[0].bookname}
                                   writer={this.props.books[0].writer}
                                   price={this.props.books[0].price}
                                   id={this.props.books[0].id} />
                    </Col>
                    <Col>
                        <Bookcard  src={this.props.books[1].src}
                                   bookname={this.props.books[1].bookname}
                                   writer={this.props.books[1].writer}
                                   price={this.props.books[1].price}
                                   id={this.props.books[1].id} />
                    </Col>
                    <Col>
                        <Bookcard  src={this.props.books[2].src}
                                   bookname={this.props.books[2].bookname}
                                   writer={this.props.books[2].writer}
                                   price={this.props.books[2].price}
                                   id={this.props.books[2].id}/>
                    </Col>
                    <Col>
                        <Bookcard  src={this.props.books[3].src}
                                   bookname={this.props.books[3].bookname}
                                   writer={this.props.books[3].writer}
                                   price={this.props.books[3].price}
                                   id={this.props.books[3].id}/>
                    </Col>
                    <Col>
                        <Bookcard  src={this.props.books[4].src}
                                   bookname={this.props.books[4].bookname}
                                   writer={this.props.books[4].writer}
                                   price={this.props.books[4].price}
                                   id={this.props.books[4].id}/>
                    </Col>

                </Space>


            </Row>




        )
    }
}*/
export default class Booklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.bookline
        }
    }

    render() {
        const list = this.state.data.map(
            (item) => ({
                content: <Bookcard src={item.src}
                                   bookname={item.bookname}
                                   writer={item.writer}
                                   price={item.price}
                                   id={item.id}/>
            })
        );

        return (
            /* <div >
               <Space direction="vertical">
                   <Bookline books={this.state.line[0]}/>
                   <Bookline books={this.state.line[1]}/>
                   <Bookline books={this.state.line[2]}/>
                   <Bookline books={this.state.line[3]}/>
                   <Bookline books={this.state.line[4]}/>
               </Space>


             </div>*/
            <ProList pagination={{defaultPageSize: 25, showSizeChanger: false}}
                     grid={{column: 5}}
                     metas={{content: {}, avatar: false}} dataSource={list} size="small"

            />


        )

    }
}
