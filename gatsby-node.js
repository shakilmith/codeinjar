const path = require("path");

//default postTemplate for all mdx posts
const postTemplate = path.resolve(`./src/templates/post-template.js`);


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { createSlice } = actions;

  //creating header, footer etc. slice
  
   // Register the Header Slice
  createSlice({
    id: "header",
    component: path.resolve("./src/components/header.js"),
  })

  // Register the Footer Slice
  createSlice({
    id: "footer",
    component: path.resolve("./src/components/footer.js"),
  })



  //query to retrieve all mdx posts, located in the content folder
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            title
            category
          }
          internal {
            contentFilePath
      }
        }
      }
    }
  `);

  //if there is any error loading post, show this default message
  //
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error loading MDX posts");
  }

  //retrieve all posts
  const posts = result.data.allMdx.nodes;

  //create mdx posts (default posts)
  posts.forEach((post)=> {
    const slug = post.frontmatter.slug || post.internal.contentFilePath
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, "");

    
    createPage({
      path: `/${slug}`, // Path based on category or default slug
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id
      },

    })
  })


//create path for blog posts (/blog/{slug})

  
  
};

