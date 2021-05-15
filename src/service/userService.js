
import {postRequest} from "../utils/ajax";
import {message} from "antd";
import {history} from "../utils/history";

export function login(data) {
    const url = 'http://localhost:8080/login';
    const callback = data => {
        if (data.status > 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            history.go(0);
            message.success(data.message);
        } else {
            message.error(data.message);
        }
    };


    postRequest(url, data, callback);
}

export function checkSession(callback) {
    const url = 'http://localhost:8080/checkSession';
    postRequest(url, {}, callback);
}

export function logout() {
    const url = 'http://localhost:8080/logout';
    const callback = data => {
        if (data.status > 0) {
            localStorage.removeItem('user');
            history.push("/login");
            history.go(0);
            message.success(data.message);
        } else {
            message.error(data.message);
        }
    };
    postRequest(url, {}, callback);
}

export function getUser(callback) {
    const url = 'http://localhost:8080/getUser';
    postRequest(url, {}, callback);
}


