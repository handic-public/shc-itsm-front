import React from "react";
import {signin} from "./service/ApiService";
//import Button from "@material-ui/core/Button";
//import Textfield from "@material-ui/core/TextField";
//import Grid from "@material-ui/core/Grid";
// import { Typography } from "@mui/material/Typography";
import { Container } from "@material-ui/core/";

import { Button, Grid, TextField, Typography } from "@mui/material";

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
        return (
            <Container componse="main" maxWidth="xs" style={{ marginTop: "8%"}}>
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
                    </Grid>
                </form>
                <p></p>
            </Container>
        );
    }
}

export default Login;