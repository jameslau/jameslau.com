import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>Boston based front-end developer.</p>
      <p>If you want to get in touch with me, go to my <Link to="/contact">contact page</Link> and reach out!</p>

      <Footer />
    </div>
  )
}

export default AboutPage