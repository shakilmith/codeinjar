import * as React from "react"
import Drawer from "./drawer"
import SideBar from "./drawer"


export default function Header(){
    return(
        <div style={{background: "gray"}}>
            <SideBar />
        </div>
    )
}