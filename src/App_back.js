import './App.css';
import Todo from './Todo';
import React, { useState, useEffect } from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from "./AddTodo";
import { Add } from '@mui/icons-material';
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  // 요청에 대한 옵션
  useEffect(() => {
    call("/qna", "GET", null)
    .then((response) => setItems(response.data));

/* 서비스통합으로 인하여 주석처리
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:8080/qna", requestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          setItems(response.data);
        },
        (error) => {

        }
      );
*/
  }, []);

  const addItem = (item) => {
    /* 서비스통합으로 인하여 주석처리
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false;  // done 초기화
    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items : ", items);
    */
   call("/qna", "POST", item)
   .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    /* 서비스통합으로 인하여 주석처리
    // 삭제할 아이템을 찾는다.
    const newItems = items.filter(e => e.id !== item.id);
    // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems]);
    */
    call("/qna", "DELETE", item)
   .then((response) => setItems(response.data));
  };
  
  const editItem = (item) => {
    /* 서비스통합으로 인하여 주석처리
    setItems([...items]);
    */
    call("/qna", "PUT", item)
    .then((response) => setItems(response.data));
  };

  // 기존 html 방식
  // let todoItems = items.length > 0 && items.map((item) => <Todo item={item} key={item.id} />);
  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16}}>
      <list>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem}/>
        ))}
      </list>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
