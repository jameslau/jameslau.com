import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// define queries separately. this only works well with the template files
export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
    }
    html
  }
}
`

const BlogTemplate = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    </Layout>
  )
}

export default BlogTemplate