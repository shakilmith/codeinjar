import * as React from "react"
import { graphql, Link } from "gatsby"
import {container, linkStyle} from "../../components/css/example.module.css"



export default function JavaExamplesPage({data}){
    const posts = data.allMdx.nodes;

    return(
        <div className={container}>
            <h1>Java Examples</h1>
            {
                posts.map((post)=>(
                        <p>
                            <Link to={`/${post.frontmatter.slug}`} className={linkStyle}>
                            {post.frontmatter.title}
                            </Link>
                        </p>
                ))
            }
        </div>
    )
}


//fetch all Java examples posts
export const query = graphql`
  query {
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/content/java/examples/"}}}
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