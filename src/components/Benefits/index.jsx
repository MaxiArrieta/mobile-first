import React from "react"
import Card from "../Card"
import { Section, Div, Span } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const Benefits = () => {
  const { image, check, clock, dollar, eye } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "icons/batata.svg" }) {
        extension
        publicURL
      }
      check: file(relativePath: { eq: "icons/check-circle.svg" }) {
        extension
        publicURL
      }
      clock: file(relativePath: { eq: "icons/clock.svg" }) {
        extension
        publicURL
      }
      dollar: file(relativePath: { eq: "icons/dollar-sign.svg" }) {
        extension
        publicURL
      }
      eye: file(relativePath: { eq: "icons/eye.svg" }) {
        extension
        publicURL
      }
    }
  `)

  return (
    <Section>
      <Span imageUrl={image.publicURL}></Span>
      <Div>
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </Div>
      <Card
        imageUrl={clock.publicURL}
        title="Tiempo real"
        article="Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento."
      />
      <Card
        imageUrl={eye.publicURL}
        title="No hay tasas escondidas"
        article="Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo."
      />
      <Card
        imageUrl={dollar.publicURL}
        title="Compara monedas"
        article="Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo."
      />
      <Card
        imageUrl={check.publicURL}
        title="Información confiable"
        article="Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan."
      />
    </Section>
  )
}

export default Benefits
