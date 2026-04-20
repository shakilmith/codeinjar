import * as React from "react"
import {postContainer, postContentStyle} from "./css/post.module.css"
import Footer from "./footer"
import SideBar from "./sidebar/sidebar"


const BlogPostLayout =({ children })=>{
    return(
    <div>
        {/*Header section*/}
        <SideBar />
       
        <div className={postContainer}>
          <div className={postContentStyle}>
              {children}
          </div>
        </div>

        {/*Footer section*/}
        <Footer />
    </div>
    )
}



  
export default BlogPostLayout;
