import { API_BASE_URL } from "../api-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type" : "application/json",
    });

    // 로컬 스토리지에서 ACESS TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }
    
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    
    return fetch(options.url, options)
        .then((response) => {
            // console.log(response.status);
            if(response.status === 403) {
                window.location.href = "/login";    // redirect
                return;
            }
            // response.ok가 true이면 정상적인 응답을 받은 것이고 아니면 에러 응답을 받은것
            if(!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        // 기존에는 이렇게 처리 했는데 'response.json()' 값이 promise여서 body부분 처리가 되질 않아 오류발생됨.
        //     response.json().then((json) => {
        //         if(!response.ok) {
        //             return Promise.reject(json);
        //         }
        //         return json;
        //     })
        // )
        .catch((error) => {
            // 추가 된 부분
            console.log(error);
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
        if(response.token) {
            // 로컬스토리지에 토큰 저장
            localStorage.setItem("ACCESS_TOKEN", response.token);
            // token이 존재할경우 Tdo 화면으로 rediret
            window.location.href = "/";
        }

    });

}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}