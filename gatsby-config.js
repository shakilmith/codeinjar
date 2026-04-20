/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Codeinjar`,
    siteUrl: `https://codeinjar.com`
  },
  plugins: 
  [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  
    /**
     * gatsby-plugin-mdx
     * added .mdx and .md file extension
    */
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        }
      },
  
  
      //path should be the following one when development
      //path: process.env.NODE_ENV === `development` ? `${__dirname}/content/blog` : `${__dirname}/content`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/codeinjar.png` 
      },
    },
]
};