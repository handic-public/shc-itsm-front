import React from "react";

const Layoutlogin = ( props : {
    children : React.ReactNode
}) => {
    return(
        <div className="layout_login">
            {props.children}
        </div>
    )
}
 
export default Layoutlogin