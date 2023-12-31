import React from "react";
import Todo from './Todo';
import AddTodo from "./AddTodo";
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography } from "@mui/material";
import { call, signout } from "./service/ApiService";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            /* (1) 로딩 중이라는 상태를 표현할 변수 생성자에서 상태 변수를 추가한다. */
            loading: true,
        };
    }

    componentDidMount() {
        /* (2) componentDidMout에서 Todo 리스트를 가져오는 GET 요청이 성공적으로 리턴하는 경우 loading을 false로 고친다. 더이상 로딩 중이 아니라는 뜻이다. */
        call("/todo", "GET", null).then((response) =>
            this.setState({ items: response.data, loading: false })
        );
    }

    add = (item) => {
        call("/todo", "POST", item).then((response) =>
            this.setState({ items: response.data })
        );
    };

    delete = (item) => {
        call("/todo", "DELETE", item).then((response) =>
            this.setState({ items: response.data })
        );
    };

    update = (item) => {
        call("/todo", "PUT", item).then((response) =>
            this.setState({ items: response.data })
        );
    };
    render() {
        var todoItems = this.state.items.length > 0 && (
            <Paper style={{ margin: 16 }}>
                <List>
                    {this.state.items.map((item, idx) => (
                        <Todo
                            item={item}
                            key={item.id}
                            delete={this.delete}
                            update={this.update}
                        />
                    ))}
                </List>
            </Paper>
        );

        // navigationBar 추가
        var navigationBar = (
            <AppBar position="static">
                <Toolbar>
                    <Grid justify="space-between" container>
                        <Grid item>
                            <Typography variant="h6">오늘의 할일</Typography>
                        </Grid>
                        <Grid>
                            <Button color="inherit" onClick={signout}>
                                로그아웃
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );

        /* 로딩중이 아닐때 렌더링할 부분 */
        var todoListPage = (
            <React.Fragment>
                {navigationBar}
                <Container maxWidth="md">
                    <AddTodo add={this.add} />
                    <div className="TodoList">{todoItems}</div>
                </Container>
            </React.Fragment>
        );

        /* 로딩중일때 렌더링할 부분 */
        var loadingPage = <h1> 로딩중.. </h1>;
        var content = loadingPage;

        if (!this.state.loading) {
            /* 로딩중이 아니면 todoListPage를 선택 */
            content = todoListPage;
        }

        /* 선택한 content 렌더링 */
        return (
            <div className="App">
                {content}
                <Link to="/Dashboard">대시보드</Link>
                <Link to="/Dashboard2">대시보드2</Link>
                <Link to="/inlogin">로그인2</Link>
            </div>
        )
    }
}

export default App;