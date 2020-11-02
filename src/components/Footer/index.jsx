import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Footter, SectionLeft } from "./styles"

const Footer = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/logo-footer.svg" }) {
        extension
        publicURL
      }
    }
  `)

  return (
    <Footter>
      <SectionLeft>
        <ul>
          <li>
            <span>LinkedIn</span>
          </li>
          <li>
            <span>CrunchBase</span>
          </li>
          <li>
            <span>Hackernews</span>
          </li>
        </ul>
      </SectionLeft>
      <section>
        <img src={image.publicURL} alt="Logo de Batatabit 2020" />
      </section>
    </Footter>
  )
}

export default Footer
