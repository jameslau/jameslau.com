/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    /* altering title also alters GraphQL database */
    title: 'James Lau', 
    author: 'James Lau'
  }, 
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blogs/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-122362388-1", // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`, // Needed for dynamic images 
    {
      // add location of image files for site overall
      resolve: `gatsby-source-filesystem`,
      // setup options object for path directory
      // https://www.gatsbyjs.com/docs/working-with-images-in-markdown/#configuring-for-images-and-posts-in-different-directories
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      // convert the gatsby transform-remark from a string to an object for enhancements
      resolve: 'gatsby-transformer-remark',
      // setup options object
      // setup options documentation: https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
      options: {
        // https://www.gatsbyjs.com/docs/working-with-images-in-markdown/#configuring-for-images-and-posts-in-different-directories
        name: 'assets',
        path: `${__dirname}/src/assets`,
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // you can provide this option in the JS code to auto resize the images
              maxWidth: 750,
              // prevent you from clicking an image and taking you to the actual image in the directory
              linkImagesToOriginal: false
            }
          },
        ]
      }
    },
  ]
} 
