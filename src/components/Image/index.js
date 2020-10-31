import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "3.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const img = image.sharp.fluid
  return (
    <section id="home">
      <p>hola</p>
    </section>
  )
}

export default Image
