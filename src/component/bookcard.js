import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'

export default class Bookcard extends React.Component {
    render() {

        return (

            <Link  to={{
                pathname: '/bookview',
                search: '?id=' + this.props.id}}>

                <Card style={{ width: 200,height:350}} bodyStyle={{ padding: 1 } } hoverable={true}>
                <div >
                    <img alt="example" width="100%" src={this.props.src} />
                </div>
                <div >
                    <h3>{this.props.bookname.length>20?this.props.bookname.substr(0,25)+"..":this.props.bookname}</h3>
                    <p>{this.props.writer}</p>
                    <p style={{color:'red'}}>{this.props.price}</p>
                </div>
                </Card>
            </Link>


        )
    }
}