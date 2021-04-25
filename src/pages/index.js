import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>Welcome to my website!</p>
      <p>Want to know more <Link to="/about">about</Link> me?</p>
    </Layout>
  )
}

export default IndexPage

// export default function Home() {
//   return <div style={{ color: 'purple', fontSize: '72px' }}>Hello world!</div>
// }
