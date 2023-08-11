/* Qna목록의 기능을 표현하는 소스
 * param props
 * return 화면 반영
 */
import React, { useState } from "react";
// 화면 UI 관련된 내용 import (material의 경우 npm으로 설치 되어 있는 상태)
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const QnaBoard = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.update;
    const deleteItem = props.delete;

    return (

    );
};
export default QnaBoard;