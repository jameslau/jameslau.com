import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Boston based front-end developer.</p>
      <p>If you want to get in touch with me, go to my <Link to="/contact">contact page</Link> and reach out!</p>
    </Layout>
  )
}

export default AboutPage