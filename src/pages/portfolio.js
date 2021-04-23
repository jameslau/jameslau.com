import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <h1>Portfolio</h1>
      <p>Checkout some of the work I have done in the past!</p>
      
      <div>
        <h3>red hat</h3>
        <p> red hat project description goes here</p>
      </div>

      <div>
        <h3>kor</h3>
        <p>kor project description goes here</p>
      </div>

      <Footer />
    </div>
  )
}

export default PortfolioPage