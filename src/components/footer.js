import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () => {

  // a tag template literal
  const footerData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>site by {footerData.site.siteMetadata.author} © 2021</p>
    </footer>
  )
}

export default Footer