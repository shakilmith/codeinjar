import * as React from "react"
import {rootContainer} from "../layout.module.css"
import Footer from "../footer";
import SideBar from "../sidebar/sidebar";

const HomePageLayout=({children})=>{
    return(
        <div>
            {/*Header section*/}
            
            <SideBar />

            {/*root content body*/}
            <div className={rootContainer}>
                {children}
            </div>


        {/*Footer section*/}
           <div>
            <Footer />
           </div>
        </div>
    )
}


export default HomePageLayout;