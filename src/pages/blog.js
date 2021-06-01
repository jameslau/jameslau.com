import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as blogStyles from './blog.module.scss'

import Layout from "../components/layout"

const BlogPage = () => {

  // a tag template literal
  const blogExcerptdata = useStaticQuery(graphql`
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
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        
        {blogExcerptdata.allMarkdownRemark.nodes.map((nodes) => { // this iterates through all post node types
          if (nodes.frontmatter.posttype === 'blog') { // tell system to return only if they are posttype: blog
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${nodes.fields.slug}`}>
                  <h2>{nodes.frontmatter.title}</h2>
                  <p>{nodes.frontmatter.date}</p>
                </Link>
              </li>
            )
          }
        })}

      </ol>
    </Layout>
  )
}

export default BlogPage