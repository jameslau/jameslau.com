import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'

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
      <p>site developed with <Link to="https://www.gatsbyjs.com/">Gatsby.js</Link>. built by {footerData.site.siteMetadata.author} © 2021</p>
    </footer>
  )
}

export default Footer