import React from "react";
import LayoutLogin from "../layout/layout_login";
import {signin} from "../service/ApiService";
import { Link, Button, Grid, TextField, Container, Typography } from "@mui/material";

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
                <Container componse="main" maxWidth="xs">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">
                                로그인
                            </Typography>
                        </Grid>
                    </Grid>
                    <form noValidate onSubmit={this.handleSubmit}>
                        {" "}
                        {/* submit 버튼을 클릭하면 handleSubmit이 실행됨 */}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth id="username" label="아이디" name="username" /*autoComplete="email"*/ />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField varinat="outlined" required fullWidth id="password" label="패스워드" name="password" type="password" autoComplete="current-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" fullWidth variant="contained" color="primary">
                                    로그인
                                </Button>
                            </Grid>
                            <Link href="/signup" variant="body2">
                                <Grid item> 계정이 없습니까? 여기서 가입 하세요.</Grid>
                            </Link>
                        </Grid>
                    </form>
                    <p></p>
                </Container>
            </LayoutLogin>
        );
    }
}

export default inLogin;