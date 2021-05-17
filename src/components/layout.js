import React from 'react'

import Header from './header'
import Footer from './footer'
//import "@fontsource/montserrat" // Defaults to weight 400
//import "@fontsource/roboto" // Defaults to weight 400
import '../styles/index.scss'

import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout