import React from "react";
import Header from "./header";
import Footer from "./footer";
import Gnb from "./gnb";

const Layout = ( props : {
    children : React.ReactNode
}) => {
    return(
        <div className="Layout">
            <Header />
            <main>
                <Gnb />
                {props.children}
            </main>            
            <Footer />
        </div>
    )
}
 
export default Layout