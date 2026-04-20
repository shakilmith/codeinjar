import * as React from "react"
import Footer from "./footer";
import {container, blogTitle} from "./blog-page.module.css"
import SideBar from "./sidebar/sidebar";



const BlogPageLayout=({children})=> {
    return(
        <div>
            {/*Header*/}
            <SideBar />

            
            <div className={blogTitle} style={{marginTop: 64 + 'px'}}>
                <p>Blog</p>
            </div>
            <div className={container}>
            <main>
                {children}
            </main>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPageLayout;