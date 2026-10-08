import * as React from "react"
import {postContainer, postContentStyle, relatedPosts} from "./css/post.module.css"
import { Slice } from "gatsby"


const BlogPostLayout =({ children })=>{
    return(
    <div>
        {/*Header component*/}
        <Slice alias="header" />


        {/*main content: mdx*/}
        <main>
            {children}
        </main>

        {/*Footer component*/}
        <Slice alias="footer" />
    </div>
    )
}



  
export default BlogPostLayout;
