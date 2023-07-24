/* Todo목록의 기능을 표현하는 소스
 * param props
 * return 화면 반영
 */
import React, { useState } from "react";
// 화면 UI 관련된 내용 import (material의 경우 npm으로 설치 되어 있는 상태)
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.update;
    const deleteItem = props.delete;

    // editEventHandler
    const editEventHandler = (e) => {
        /*
        서비스통합으로 인하여 주석처리
        item.title = e.target.value;
        editItem();
        */
       setItem({...item, title: e.target.value});
    }

    // deleteEventHandler 작성
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    // turnOffReadOnly
    const turnOffReadOnly = () => {
        setReadOnly(false);
    };

    // turnOnReadOnly
    const turnOnReadOnly = (e) => {
        /*
        서비스통합으로 인하여 주석처리
        if(e.key =='Enter') {
            setReadOnly(true);
        }
        */
        if(e.key =='Enter' && readOnly === false) {
            setReadOnly(true);
            editItem(item);
        }
    };

    // checkboxEventHandler
    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    }

    return (
        // react의 material 방식의 객체를 부모에게 반환
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked", readOnly: readOnly}} onClick={turnOffReadOnly} onKeyDown={turnOnReadOnly} onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    />
            </ListItemText>
            
            {/* <ListItemSecondaryAction> */}
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            {/* </ListItemSecondaryAction> */}
            
        </ListItem>
        // html을 이용한 기존방식 
        // <div className="Todo">
        //     <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
        //     <label id={item.id}>{item.title}</label>
        // </div>
    );
};

export default Todo;