import React from "react"
import CardPayment from "../CardPayments"
import { Section, Div, Cards } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const Payment = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "icons/orange-right-arrow.svg" }) {
        extension
        publicURL
      }
    }
  `)

  return (
    <Section id="payments">
      <Div>
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </Div>
      <Cards>
        <CardPayment
          imageUrl={image.publicURL}
          title="Basico"
          subtitle="Pago Anual"
          price="19"
          saving="*Plan básico para mantenerte informado."
        />
        <CardPayment
          imageUrl={image.publicURL}
          title="Recomendado"
          subtitle="Pago Anual"
          price="49"
          saving="*Ahorras $129 comparado al plan mensual."
        />
        <CardPayment
          imageUrl={image.publicURL}
          title="Expert"
          subtitle="Acceso de por vida"
          price="99"
          saving="*Ahorras $999+ comparado al plan anual."
        />
      </Cards>
    </Section>
  )
}

export default Payment
