import React from "react"
import { Section } from "./styles"

const CardPayment = () => {
  return (
    <Section>
      <article>
        <p>Recomendado</p>
        <div>
          <h3>Pago Anual</h3>
          <p>
            $ <span>99</span>
          </p>
          <p>*Ahorras $129 comparado al plan mensual.</p>
          <button>
            Escoger este <span></span>
          </button>
        </div>
      </article>
    </Section>
  )
}

export default CardPayment
