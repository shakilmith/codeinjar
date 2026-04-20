import * as React from "react"
import { Link, graphql } from "gatsby"
import {gridContainer, postLinkStyle, postCard} from "../../components/css/blog-page.module.css"


export default function BlogPage({data}){
    const posts = data.allMdx.nodes;
    return(
      <>
      
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
            <h1>Blog</h1>

            {/*Blog Posts */}
            <div className={gridContainer}>
                {
                    posts.map((post)=>(
                        <div key={post.id} className={postCard}>
                            <div>
                            <p style={{padding: "8px 12px"}}>
                            <Link to={`/${post.frontmatter.slug}`} className={postLinkStyle}>
                                {post.frontmatter.title}
                            </Link>
                            </p>
                            <p style={{padding: "0 12px"}}>{post.frontmatter.postInfo}</p>
                            </div>
                        </div>
                        ))
                }
            </div>
        </div>
        </>
    )
}


//fetch posts from content/blog folder
export const query = graphql`
  query {
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/content/blog/"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          title
          slug
          postInfo
        }
        id
        internal {
          contentFilePath
        }
      }
    }
  }
`
