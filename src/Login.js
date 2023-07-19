import React from "react";
import {signin} from "./service/ApiService";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core/Typography";
import { Container } from "@material-ui/core/";

class Login extends React.Component {
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
        return <p>로그인 페이지</p>
    }
}

export default Login;