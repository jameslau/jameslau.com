import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"

const BlogPage = () => {

  // a tag template literal
  const blogExcerptdata = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
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
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}

      </ol>
    </Layout>
  )
}

export default BlogPage