import React from "react";
import './styles/index.css';
import App from "./App";
import Login from "./Login";
import Dashboard from "./page/Dashboard";
import Dashboard2 from "./page/Dashboard2";
import Inlogin from "./page/inlogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import SignUp from "./SignUp";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme({
    typography : {
        fontFamily : "'원신한','OneShinhanLight', 'OneShinhanMedium', 'OneShinhanBold'"
    }
})


class AppRouter extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<App />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard2" element={<Dashboard2 />} />
                        <Route path="/inlogin" element={<Inlogin />} />
                    </Routes>
                    {/* <Box mt={5}>
                        <Copyright />
                    </Box> */}
                </Router>
            </ThemeProvider>
        );
    }
}

export default AppRouter;