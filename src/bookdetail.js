import React from 'react';
import 'antd/dist/antd.css'
import {Descriptions, Button, Image} from 'antd';


export  default class Bookdetail extends  React.Component{
    render() {
        const {info} = this.props;
        if(info == null){ return null; } /* if the data is not available, return null instead */
        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><Image src="https://img14.360buyimg.com/n0/jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg" width={600} /></div>
                    <div className={"descriptions"}>
                        <Descriptions> /* descriptions here */ </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}> /* buttons */
                    <Button type="danger" icon="shopping-cart" size={"large"}>加入购物车</Button>
                    <Button type="danger" icon="pay-circle" size={"large"} ghost>立即购买</Button>
                </div>
            </div>
        )
    }
}