import React from "react";

const Layoutlogin = ( props : {
    children : React.ReactNode
}) => {
    return(
        <div className="layout_login">
            <main>
                {props.children}
            </main>
        </div>
    )
}
 
export default Layoutlogin