import React from "react"
import { Article } from "./styles"

const Card = ({ imageUrl, title, article }) => (
  <Article imageUrl={imageUrl}>
    <span></span>
    <h3>{title}</h3>
    <p>{article}</p>
  </Article>
)

export default Card
