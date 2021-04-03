import React from "react";
import { Steps,Card} from 'antd';
import { ShoppingCartOutlined, SolutionOutlined, PayCircleOutlined, SmileOutlined } from '@ant-design/icons';
import "../CSS/input.css"
const { Step } = Steps;
export default class Pay extends React.Component{
    constructor(props) {
        super(props);
    }

  render() {
        return(
            <Card style={{margin:'0 auto',marginTop:40,width:'70%'}}>
                <Steps style={{margin:'0 auto',marginTop:40}}>
                    <Step status="finish" title="Selection" icon={<ShoppingCartOutlined />} />
                    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                    <Step status="wait" title="Pay" icon={<PayCircleOutlined />} />
                    <Step status="wait" title="Done" icon={<SmileOutlined />} />
                </Steps>
                <div> 收货人:<input /></div>
                <div> 地址:<input /></div>

            </Card>

        )

  }


}