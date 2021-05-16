import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as workStyles from './work.module.scss'

import Layout from "../components/layout"

const WorkPage = () => {

  // a tag template literal
  const workExcerptdata = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              draft
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Work</h1>
      <ol className={workStyles.posts}>
        
        {workExcerptdata.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={workStyles.post}>
              <Link to={`/work/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}

      </ol>
    </Layout>
  )
}

export default WorkPage
















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