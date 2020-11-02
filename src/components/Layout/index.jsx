import React from "react"
import Helmet from "react-helmet"
import { GlobalStyle } from "../../styles"

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Mobile First</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
    </>
  )
}

export default Layout
