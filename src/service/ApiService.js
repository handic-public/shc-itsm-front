import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type" : "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if(request) {
        // GET method
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
        .then((response) => 
            response.json().then((json) => {
                // response.ok가 true이면 정상적인 응답을 받은 것이고 아니면 에러 응답을 받은것
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        )
        .catch((error) => {
            // 추가 된 부분
            console.log(error.status);
            if(error.status === 403) {
                window.location.href = "/login";    // redirect
            }
            return Promise.reject(error);
        });
    // return fetch(options.url, options).then((response) => {
    //     if(response.status === 200) {
    //         return response.json();
    //     }
    // }).catch((error) => {
    //     console.log("http error");
    //     console.log(error);
    // });
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO) 
    .then( (response) => {
        console.log("response : ", response);
        alert("로그인 토큰: " + response.token);
    });
}