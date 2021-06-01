// load in the built in path module from Node.js
// note: no need to install this from something external because this is a node core module
const path = require('path')

// gatsby node configuration file
// this file is use to tap into the node api that gatsby exposes
// documentation: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

// function runs when a new node is created
module.exports.onCreateNode = () => {

  // the arguments you can interact with are node and actions
  exports.onCreateNode = ({ node, actions }) => { 
    
    // Transform the new node here and create a new node or
    // create a new node field.
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
      // try to get the slug
      // reference: https://nodejs.org/dist/latest-v14.x/docs/api/path.html#path_path_basename_path_ext
      const slug = path.basename(node.fileAbsolutePath, '.md')
      
      // adding a bunch of '@' signs to make it easier to find in the terminal as first argument
      // add slug as second argument to run the function
      //console.log ('@@@@@@@@@@', slug)
      //console.log(JSON.stringify(node, undefined, 4))
      
      // gatsby createNodeField function
      // reference: https://www.gatsbyjs.com/docs/reference/config-files/actions/
      createNodeField ({
        node,
        name: 'slug',
        value: slug
      })

    }

    // makes the string look prettier in the console (with the terminal)
    // note: internal": { "type": "SitePage", ... } SitePage is an internal Gatsby "type", specific for new pages
    // console.log(JSON.stringify(node, undefined, 4)) 
  }

}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPage = path.resolve("src/templates/blog.js");
    const projectPage = path. resolve("src/templates/project.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    posttype
                    draft
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
          `
          ).then(result => {
            if (result.errors) {
              /* eslint no-console: "off" */
              console.log(result.errors);
              reject(result.errors);
            }
    
            result.data.allMarkdownRemark.edges.forEach(edge => {
    
              if (edge.node.frontmatter.posttype === 'project') {
                createPage({
                  path: `/project/${edge.node.fields.slug}`,
                  component: projectPage,
                  context: {
                    slug: edge.node.fields.slug,
                  }
                });
              } else if (edge.node.frontmatter.posttype === 'blog') { // blog post
                createPage({
                  path: `/blog/${edge.node.fields.slug}`,
                  component: blogPage,
                  context: {
                    slug: edge.node.fields.slug, 
                  }
                });
              } 
            });
    
      
          })
        );
      });
    };

// module.exports.createPages = async ({ graphql, actions }) => {
  
//   const { createPage } = actions
  
//   // resolve will create everything from the absolute path of the hard drive
//   const blogTemplate = path.resolve('./src/templates/blog.js')
//   const projectTemplate = path.resolve('./src/templates/project.js')
  
//   // this functions creates a promise
//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               posttype
//               description
//               draft
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // iterate all blogs and run createPage function for each post
//   res.data.allMarkdownRemark.edges.forEach((edge) => {
//     if (edge.node.frontmatter.posttype === 'blog') {
//       createPage ({
//         path: `/blog${edge.node.fields.slug}`,
//         component: blogTemplate,
//         context: {
//           slug:  edge.node.fields.slug,
//         }
//         // component: blogTemplate,
//         // path: `/blog/${edge.node.fields.slug}`,
//         // context: {
//         //   slug: edge.node.fields.slug
//         // }
//       });
//     } else {
//       // iterate all projects and run createPage function for each post
//       createPage ({
//         path: `/project/${edge.node.fields.slug}`,
//         component: projectTemplate ,
//         context: {
//           slug:  edge.node.fields.slug,
//         }
//         // component: projectTemplate,
//         // path: `/work/${edge.node.fields.slug}`,
//         // context: {
//         //   slug: edge.node.fields.slug
//         // }
//       })
//     }
//   });

// }

