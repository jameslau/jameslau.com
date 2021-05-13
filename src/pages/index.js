import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>Welcome to my site! My name is James Lau. I’m a Boston based front-end web developer with a background in graphic design. I’ve worked with a wide range of clients and projects over the years; combined work from print, mobile, and the web.</p>
      <p>Most recently, I’ve been concentrating my focus on front-end development with specific attention to user interface and user experiences through development.</p>
      <p>When not working on web development you can catch me taking photos of food and checking out foodie spots around the city. I do a ton of Instagramin’ and I also curate a travel blog site called Cultural Hop. Sharing personal traveling advice and experiences for people who are curious about other cultures around the world.</p>
      <p>If you want to get in touch with me, go to my <Link to="/contact">contact page</Link> and reach out!</p>
    </Layout>
  )
}

export default IndexPage

// export default function Home() {
//   return <div style={{ color: 'purple', fontSize: '72px' }}>Hello world!</div>
// }
