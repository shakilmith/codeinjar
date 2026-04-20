// src/templates/post-template.js
import React from "react";
import { graphql } from "gatsby";
import BlogPostLayout from '../components/blog-post-layout'
import SEO from "../components/seo/seo.js"


const PostTemplate = ({ data: { mdx }, children, pageContext}) => {
  //title, description, metadata etc. of the mdx posts

  const title = mdx.frontmatter.title;
  const description = mdx.frontmatter.description;
  const siteName = "CodeinJar"
  return (
    <div key={pageContext.id}>
    <SEO
    title={`${title} | CodeinJar`}
    description={description}
    />

    <BlogPostLayout>
      <div>
        <h1 className="blog-post-title">{title}</h1>
      </div>
      <div className="blog-post-content">
        {children}
      </div>
    </BlogPostLayout>
    </div>
  )
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;


export const Head=({data})=>{
  const title = data.mdx.frontmatter.title;
  const description = data.mdx.frontmatter.description;
  return(
    <>
      <title>{title} | codeinjar.com</title>
    
    {/* meta tags for SEO*/}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    {/*montag ads*/}
    <meta name="monetag" content="7efa2fb249f173347075db1a48be1e51" />
    </>
  )
}
