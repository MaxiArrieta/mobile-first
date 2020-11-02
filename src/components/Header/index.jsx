import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Div, Botton } from "./styles"

const Header = () => {
  const { image, images } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/logo.svg" }) {
        extension
        publicURL
      }
      images: file(relativePath: { eq: "icons/down-arrow.svg" }) {
        extension
        publicURL
      }
    }
  `)

  return (
    <Section>
      <img src={image.publicURL} alt="logo" />
      <Div>
        <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p>
          Batabit te ayuda a navegar entre los diferentes precios y tendencias.
        </p>
        {/* Paso la url de la imagen por prop al styled component */}
        <Botton imagen={images.publicURL} to="payments" smooth duration={2000}>
          Conoce Nuestros Planes <span></span>
        </Botton>
      </Div>
    </Section>
  )
}

export default Header
