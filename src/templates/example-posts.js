import React from 'react';
import {graphql, Link} from "gatsby";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {tutorialPageTitle} from "../components/layout.module.css"
import Layout from "../components/layout";

const ExamplePosts = ({ data, pageContext }) => {
  //const category = pageContext.category; // Get the category from the context
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className={tutorialPageTitle}>
        <p>Java Examples</p>
     </div>
     
     <div>
      <Box sx={{ 
      flexGrow: 1,
      my: 4,
      mx: 4
      }}>

  <Grid container spacing={4}>
  {
    posts.map((node)=>(
      <Grid item xs={12} sm={6} md={6} lg={6} key={data.id}>
        <Card>
          <CardContent>
            <div>
              <p className="example-post-title">
                <Link to={`/${node.frontmatter.slug}`} className="example-post-link-style">
                <span>{node.frontmatter.title}</span>
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </Grid>
    ))
  }

</Grid>
</Box>
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

export default ExamplePosts;