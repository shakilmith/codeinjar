import * as React from "react"
import {postImageStyle} from "./feature.module.css"


export default function App(){
    return <h1>Demo app</h1>
}


//for tutorial pages
export const PostImage=(props)=>{
    return(
        <div>
        <img src={props.src} alt={props.alt} className={postImageStyle} />
        </div>
    )
}