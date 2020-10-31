import React from "react"
import { Section, Article } from "./styles"

const Cards = ({ imageUrl, title, article }) => {
  return (
    <Section>
      <Article imageUrl={imageUrl}>
        <span></span>
        <h3>{title}</h3>
        <p>{article}</p>
      </Article>
    </Section>
  )
}

export default Cards
