import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";




export default function ExamplePostsPage(){
  //const category = pageContext.category; // Get the category from the context
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      
            <div>
              <p className="example-post-title">
                <Link to={`/${node.frontmatter.slug}`} className="example-post-link-style">
                <span>{node.frontmatter.title}</span>
                </Link>
              </p>
            </div>
</Layout>
  );
};

export const query = graphql`
  query{
    allMdx{
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
