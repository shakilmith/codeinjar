import * as React from "react"
import {rootContainer} from "../layout.module.css"
import { Slice } from "gatsby";

const HomePageLayout=({children})=>{
    return(
        <div>
            {/*Header section*/}
            <Slice alias="header" />

            {/*content body*/}
            <div className={rootContainer}>
                {children}
            </div>


        {/*Footer component*/}
        <Slice alias="footer" />
        </div>
    )
}


export default HomePageLayout;