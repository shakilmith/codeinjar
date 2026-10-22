import * as React from "react"
import { graphql, Link } from "gatsby"
import {container} from "../../components/css/example.module.css"
import {tutorialPageContainer, urlEffect, linkStyle, exampleListStyle, tutorialPageSubtitle} from "../../components/layout.module.css"
import HashIcon from "../../components/HashIcon"
import Layout from "../../components/layout"



//root component
export default function JavaExamplesPage({data}){
    const posts = data.allMdx.nodes;

    return(
      <Layout>
        <div className={tutorialPageContainer}>
            <h3 className={tutorialPageSubtitle}>Java Examples</h3>
            <ul className={exampleListStyle}>
            {
              posts.map((node)=>(
                <li key={node.id}>
                <HashIcon style={{display: "inline", paddingRight: "0.50rem"}} size={24}/>
                <Link to={`/${node.frontmatter.slug}`} className={`${linkStyle} ${urlEffect}`}>{node.frontmatter.title}</Link>
                </li>
                ))
            }
            </ul>
        </div>
      </Layout>
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