import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Section } from "./styles"
const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/bitcoinbaby2x.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
    }
  `)

  return (
    <Section imagenUrl={image.publicURL}>
      <h2>Conocelo hoy.</h2>
    </Section>
  )
}

export default Image
