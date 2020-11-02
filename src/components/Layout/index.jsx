import React from "react"
import Helmet from "react-helmet"
import { GlobalStyle } from "../../styles"
import { useStaticQuery, graphql } from "gatsby"

const Layout = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "es" }}
        title={defaultTitle}
        titleTemplate={`${defaultTitle} | ${site.siteMetadata.author}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: defaultTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: defaultTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat()}
      >
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
