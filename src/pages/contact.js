import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>phone: 617-555-5555</p>
      <p>email: ****@gmail.com</p>
      <p>twitter: <a href="https://twitter.com/james_lau">@james_lau</a></p>

      <Footer />
    </div>
  )
}

export default ContactPage