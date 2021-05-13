import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as blogStyles from './blog.module.scss'

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
      <ol className={blogStyles.posts}>
        
        {blogExcerptdata.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
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

export default BlogPage