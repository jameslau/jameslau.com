/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    /* altering title also alters GraphQL database */
    title: 'James Lau Portfolio Site', 
    author: 'James Lau'
  }, 
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      // convert the gatsby transform-remark from a string to an object for enhancements
      resolve: 'gatsby-transformer-remark',
      // setup options object
      // setup options documentation: https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
      options: {
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
          }
        ]
      }
    },
  ]
} 
