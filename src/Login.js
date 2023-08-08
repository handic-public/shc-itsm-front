import React from "react";
import LayoutLogin from "./layout/layout_login";
import {signin} from "./service/ApiService";
import { Link, Button, Grid, TextField, Container, Typography } from "@mui/material";


function Copyright() {
    return (
        <div className="copyright">
            {"Copyright © "}
            {new Date().getFullYear()}.
            ShinhanCapital all right reserved.
        </div>
    );
}

class inLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)  {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");
        // ApiService의 signin 메서드를 사용해 로그인
        signin({username: username, password: password});
    }

    render() {
        return (
            <LayoutLogin>                    
                <div className="login_wrap">
                    <div className="ci_box">
                        <span className="ci_sitsm">SITSM</span>
                    </div>
                    <div className="login_box">                        
                        <form noValidate onSubmit={this.handleSubmit}>
                        {/* submit 버튼을 클릭하면 handleSubmit이 실행됨 */}
                            <ul>
                                <li>
                                    <TextField variant="outlined" required fullWidth id="username" label="사원번호" name="username" /*autoComplete="email"*/ />
                                </li>
                                <li>
                                    <TextField varinat="outlined" required fullWidth id="password" label="비밀번호" name="password" type="password" autoComplete="current-password" />
                                </li>                            
                            </ul>
                            <div className="sel_box">

                            </div>
                            <div className="btn_box">
                                <Button type="submit" fullWidth variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>
                        </form>

                        <div className="sign_box">
                            <Link href="/signup" variant="body2">
                                계정이 없습니까? 여기서 가입 하세요.
                            </Link>
                        </div>
                    </div>
                    <div className="cr_wrap">
                        <Copyright />
                    </div>                    
                </div>
            </LayoutLogin>
        );
    }
}

export default inLogin;