import * as React from "react"
import Drawer from "./drawer"
import {header, headerContainer, navigation, logo} from "./layout.module.css"
import { Link } from "gatsby"
import SideBar from "./drawer"



export default function Header(){
    return(
        <div className={header}>
            <div className={headerContainer}>

           <div className={logo}>
            <Link to="/" style={{textDecoration: "none", color: "white"}}>
            CodeinJAR
            </Link>
            </div>

            <div className={navigation}>
                <Link to="/blog">Blog</Link>
                <SideBar />
            </div>
            
            </div>
        </div>
    )
}