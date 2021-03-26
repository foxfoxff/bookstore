import React from "react";
import Bookcard from "./bookcard";
import {Row,Col} from 'antd'
class Bookline extends React.Component{
    render() {
        return(

            <Row>
                <col>
                    <Bookcard  src={this.props.books[0].src}
                               bookname={this.props.books[0].bookname}
                               writer={this.props.books[0].writer}
                               price={this.props.books[0].price}/>
                </col>
                <col>
                    <Bookcard  src={this.props.books[1].src}
                               bookname={this.props.books[1].bookname}
                               writer={this.props.books[1].writer}
                               price={this.props.books[1].price}/>
                </col>
                <col>
                    <Bookcard  src={this.props.books[2].src}
                               bookname={this.props.books[2].bookname}
                               writer={this.props.books[2].writer}
                               price={this.props.books[2].price}/>
                </col>
                <col>
                    <Bookcard  src={this.props.books[3].src}
                               bookname={this.props.books[3].bookname}
                               writer={this.props.books[3].writer}
                               price={this.props.books[3].price}/>
                </col>
                <col>
                    <Bookcard  src={this.props.books[4].src}
                               bookname={this.props.books[4].bookname}
                               writer={this.props.books[4].writer}
                               price={this.props.books[4].price}/>
                </col>


            </Row>




        )
    }
}
export default class Booklist extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            line:this.props.bookline
        }
    }
    render() {


        return (
            <div style={{ marginLeft:'5vw'}}>
                <Bookline books={this.state.line[0]}/>
                <Bookline books={this.state.line[1]}/>
                <Bookline books={this.state.line[2]}/>
                <Bookline books={this.state.line[3]}/>
                <Bookline books={this.state.line[4]}/>
                <Bookline books={this.state.line[5]}/>
            </div>

        )

    }
}