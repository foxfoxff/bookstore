import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'

export default class Bookcard extends React.Component {
    render() {

        return (

            <Link  to={{
                pathname: '/bookview',
                search: '?id=' + this.props.id}}>

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
            </Link>


        )
    }
}