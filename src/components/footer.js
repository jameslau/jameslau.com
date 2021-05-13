import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

// define object
import * as footerStyles from './footer.module.scss'

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
    <footer className={footerStyles.footer}>
      <p>site by {footerData.site.siteMetadata.author} © 2021</p>
    </footer>
  )
}

export default Footer