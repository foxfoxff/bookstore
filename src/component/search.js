import { Input,Breadcrumb} from 'antd';
import React from "react";

const { Search } = Input;

function Searchbar(){
    return(
     <div style={{height:80}}>
         <Search
             placeholder="input search text"
             allowClear
             enterButton="Search"
             size="large"
             style={{ width: 700 ,height:40}}
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
    )
}
export default Searchbar;