import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as projectStyles from './project.module.scss'

import Layout from "../components/layout"

const ProjectPage = () => {

  // a tag template literal
  const projectExcerptdata = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            posttype
            draft
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <h1>Projects</h1>
      <ol className={projectStyles.posts}>
        
        {projectExcerptdata.allMarkdownRemark.nodes.map((nodes) => { // this iterates through all post node types
          if (nodes.frontmatter.posttype === 'project') { // tell system to return only if they are posttype: project
            return (
              <li className={projectStyles.post}>
                <Link to={`/project/${nodes.fields.slug}`}>
                  <h2>{nodes.frontmatter.title}</h2>
                  <p>{nodes.frontmatter.date}</p>
                </Link>
              </li>
            )
          } else {
            return undefined
          }
        })}

      </ol>
    </Layout>
  )

 
}

export default ProjectPage
















// OLD PORTION OF PORTFOLIO PAGE

// import React from "react"

// import Layout from "../components/layout"

// const PortfolioPage = () => {
//   return (
//     <Layout>
//       <h1>Portfolio</h1>
//       <p>Checkout some of the work I have done in the past!</p>
      
//       <div>
//         <h3>red hat</h3>
//         <p> red hat project description goes here</p>
//       </div>

//       <div>
//         <h3>kor</h3>
//         <p>kor project description goes here</p>
//       </div>
//     </Layout>
//   )
// }

// export default PortfolioPage