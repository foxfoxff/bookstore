import {postRequest,postRequest_v2} from "../utils/ajax";
import {message} from "antd";
import {history} from "../utils/history";


export const getBooks = (data, callback) => {
    const url = 'http://localhost:8080/getBooks';
    postRequest(url, data, callback);
};

export const getBook = (id,callback) =>{
    const data = {id: id};
    const url = `http://localhost:8080/getbookbyid?id=${id}`;
    console.log(url);
    postRequest(url, data, callback);
}
export function getBookById(bookId, callback) {
    const url = `http://localhost:8080/getbookbyid?id=${Number(bookId)}`;
    postRequest(url, {}, callback);
}

export function add2Cart(bookId,callback){
    console.log(bookId);
    const url = `http://localhost:8080/addToCart?id=${Number(bookId)}`;
    postRequest(url,{},callback);

}
export function getCart(callback){
    const url = `http://localhost:8080/getCart`;
    postRequest(url,{},callback);
}