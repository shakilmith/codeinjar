import * as React from "react"
import {rootContainer} from "./layout.module.css"
import Footer from "./footer"
import SideBar from "./sidebar/sidebar"
import Header from "./header"
import { Slice } from "gatsby"




const Layout =({ children })=>{
    return(
        <div>
            {/*Header: top nav*/}
            <Slice alias="header" />

            {/*root content body*/}
            <div className={rootContainer}>
            <main>
                {children}
            </main>
            </div>
            
           {/*Footer component*/}
           <Slice alias="footer" />
        </div>
    )
}


export default Layout;