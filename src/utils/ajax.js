export function postRequest(url, json, callback) {
    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include" // 允许 cookie 共享，跨域问题，传Cookie是必须配置
    };

    fetch(url, opts)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.log(error);
        })
}

let postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {postRequest_v2};
