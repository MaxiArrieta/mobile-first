import React from "react"
import CardPayment from "../CardPayments"
import { Section, Div } from "./styles"
const Payment = () => {
  return (
    <Section id="payments">
      <Div>
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </Div>
      <CardPayment />
    </Section>
  )
}

export default Payment
