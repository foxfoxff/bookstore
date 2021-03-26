import React from 'react';
import { Card } from 'antd';


const { Meta } = Card;
export default class Bookcard extends React.Component {
    render() {
        return (

            <Card style={{ width: 200 }} bodyStyle={{ padding: 1 } } hoverable={true}>
                <div >
                    <img alt="example" width="100%" src={this.props.src} />
                </div>
                <div >
                    <h3>{this.props.bookname}</h3>
                    <p>{this.props.writer}</p>
                    <p>{this.props.price}</p>
                </div>
            </Card>

        )
    }
}