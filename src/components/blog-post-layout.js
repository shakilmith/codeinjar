import * as React from "react"
import {postContainer, postContentStyle} from "./css/post.module.css"
import { Slice } from "gatsby"


const BlogPostLayout =({ children })=>{
    return(
    <div>
        {/*Header component*/}
        <Slice alias="header" />
       
       {/*content section*/}
        <div className={postContainer}>
          <div className={postContentStyle}>
              {children}
          </div>
        </div>

        {/*Footer component*/}
        <Slice alias="footer" />
    </div>
    )
}



  
export default BlogPostLayout;
