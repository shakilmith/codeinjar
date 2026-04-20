import * as React from "react"
import {rootContainer} from "./layout.module.css"
import Footer from "./footer"
import SideBar from "./sidebar/sidebar"




const Layout =({ children })=>{
    return(
        <div>
            {/*Header: top nav*/}
            <SideBar />
            {/*root content body*/}
            <div className={rootContainer}>
            <main>
                {children}
            </main>
            </div>
            
           <div>
            <Footer />
           </div>
        </div>
    )
}


export default Layout;