// src/templates/post-template.js
import React from "react";
import { graphql } from "gatsby";
import BlogPostLayout from "../components/blog-post-layout";
import SEO from "../components/seo/seo.js";
import { Link } from "gatsby";
import {relatedPosts, postContainer, postContentStyle} from "../components/css/post.module.css"



const PostTemplate = ({
  data: { mdx, categoryPosts },
  children,
  pageContext,
}) => {
  //title, description, metadata etc. of the mdx posts

  const title = mdx.frontmatter.title;
  const description = mdx.frontmatter.description;
  const category = mdx.frontmatter.category;

  const siteName = "CodeinJar";

  return (
    <div key={pageContext.id}>
      <SEO title={`${title} | CodeinJar`} description={description} />

      <BlogPostLayout>
        <div className={postContainer}>
        
        
        {/* LEFT SIDEBAR */}
        <div className={relatedPosts}>
          {category && (
            <>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}-Related Posts</h3>

              <div>
                {categoryPosts.nodes.map((post) => (
                  <p key={post.id}>
                    <Link to={`/${post.frontmatter.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                ))}
              </div>
            </>
          )}
        </div>

        {/*actual posts content*/}
        <div className={postContentStyle}>
          <h1 className="abeezee-regular-title">{title}</h1>
          <main className="post-content-style">{children}</main>
        </div>


        </div>
      </BlogPostLayout>
    </div>
  );
};

export const query = graphql`
  query ($id: String!, $category: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        category
        slug
      }
    }

    categoryPosts: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      limit: 20
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

export default PostTemplate;

export const Head = ({ data }) => {
  const title = data.mdx.frontmatter.title;
  const description = data.mdx.frontmatter.description;
  return (
    <>
      <title>{title} | codeinjar.com</title>

      {/* meta tags for SEO*/}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      {/*montag ads*/}
    </>
  );
};
