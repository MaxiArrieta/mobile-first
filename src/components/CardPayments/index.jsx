import React from "react"
import { Article, H3, Title, Price, Saving, Button } from "./styles"

const CardPayment = ({ imageUrl, title, subtitle, price, saving }) => (
  <Article>
    <Title>{title}</Title>
    <div>
      <H3>{subtitle}</H3>
      <Price>
        <span>$</span>
        {price}
      </Price>
      <Saving>{saving}</Saving>
      <Button imageUrl={imageUrl}>
        Escoger este <span></span>
      </Button>
    </div>
  </Article>
)

export default CardPayment
