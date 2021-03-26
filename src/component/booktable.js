import React from "react";
import Bookcard from "./bookcard";
const booklist1=[
    "https://img14.360buyimg.com/n1/s200x200_jfs/t5956/203/8069473743/490021/7451586b/5983fa7dNf91302f8.jpg",
    "HTML5+CSS3+JavaScript从入门到精通",
    "中国水利水电出版",
    "￥67.40",
    "1"

];
const booklist2=[
    "https://img14.360buyimg.com/n1/s200x200_jfs/t1/148121/18/9077/162549/5f6cc8beEbea70b6f/c6f63030adadbb26.jpg",
    "前端开发核心知识进阶：从夯实基础到突",
    "电子工业出版社",
    "￥68.10",
    "2"
];
 export default class Booktable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: props.First,
            second: props.Second,
            third: props.Third,
            fourth: props.Fourth,
            book: 0
        };
    }
    changeGood = () =>{
        if(this.state.book==0){
            this.setState({first:booklist2,
                book:1
            });
        }
        else{
            this.setState({first:booklist1,
                book:0
            });
        }
    }

    render() {


        return (
            <div style={{clear:'both', marginLeft:'15vw'}}>
                <span style={{fontSize:40}}>{this.props.choose?"好书推荐":"畅销书籍"}</span>

                <label
                    style={{marginLeft:550,paddingBottom:5}} className='changebook'
                    onClick={this.changeGood}
                >换一换
                </label>

                <table style={{border: 1}}>
                    <td>
                        <Bookcard
                            src={this.state.first[0]}
                            bookname={this.state.first[1]}
                            writer={this.state.first[2]}
                            price={this.state.first[3]}
                            id={this.state.first[4]}
                        />
                    </td>
                    <td>
                        <Bookcard
                            src={this.state.first[0]}
                            bookname={this.state.first[1]}
                            writer={this.state.first[2]}
                            price={this.state.first[3]}
                            id={this.state.first[4]}
                        />
                    </td>
                    <td>
                        <Bookcard
                            src={this.state.first[0]}
                            bookname={this.state.first[1]}
                            writer={this.state.first[2]}
                            price={this.state.first[3]}
                            id={this.state.first[4]}
                        />
                    </td>
                    <td>
                        <Bookcard
                            src={this.state.first[0]}
                            bookname={this.state.first[1]}
                            writer={this.state.first[2]}
                            price={this.state.first[3]}
                            id={this.state.first[4]}
                        />
                    </td>
                </table>
            </div>
        )

    }
}