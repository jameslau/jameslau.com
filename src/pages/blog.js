import React from "react"
import {graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"

const BlogPage = () => {

  // a tag template literal
  const blogExcerptdata = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        
        {blogExcerptdata.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}

      </ol>
    </Layout>
  )
}

export default BlogPage