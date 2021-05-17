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

const workTemplate = (props) => {
  return (
    <Layout>
      {/* <p>image hero for individual project page goes here. this should also match the thumbs on the gallery page.</p> */}
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default workTemplate