import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello!</h1>
      <p>Welcome to my website!</p>
      <p>Want to know more <Link to="/about">about</Link> me?</p>
      <Footer />
    </div>
  )
}

export default IndexPage

// export default function Home() {
//   return <div style={{ color: 'purple', fontSize: '72px' }}>Hello world!</div>
// }
