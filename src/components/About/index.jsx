import React from "react"
import {
  Section,
  Div,
  ImgDiv,
  DivTabla,
  Table,
  Title,
  Title2,
  SubTitle,
  SubTitle2,
  F1,
  F2,
} from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { image, trendingUp, trendingDown } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/Bitcoin.svg" }) {
        extension
        publicURL
      }
      trendingUp: file(relativePath: { eq: "icons/trending-up.svg" }) {
        extension
        publicURL
      }
      trendingDown: file(relativePath: { eq: "icons/trending-down.svg" }) {
        extension
        publicURL
      }
    }
  `)

  return (
    <Section>
      <ImgDiv imagenUrl={image.publicURL}></ImgDiv>
      <Div>
        <h2>Visibilizamos todas las tasas de cambio.</h2>
        <p>
          Traemos información en tiempo real de las casas de cambio y las
          monedas más importantes del mundo.
        </p>
      </Div>
      <DivTabla>
        <Title>Monedas</Title>
        <Table>
          <F1>Bitcoin</F1>
          <F2 imagenUrl={trendingDown.publicURL}>
            $ 1.96 <span></span>
          </F2>
          <F1>Ethereum</F1>
          <F2 imagenUrl={trendingUp.publicURL}>
            $ 0.07 <span></span>
          </F2>
          <F1>Ripple</F1>
          <F2 imagenUrl={trendingDown.publicURL}>
            $ 2.15 <span></span>
          </F2>
          <F1>Stellar</F1>
          <F2 imagenUrl={trendingDown.publicURL}>
            $ 4.96 <span></span>
          </F2>
        </Table>
        <SubTitle>
          <p>
            Actualizado: <span>19 Julio 23:45</span>
          </p>
        </SubTitle>
      </DivTabla>
      <DivTabla>
        <Title2>Comisiones</Title2>
        <Table>
          <F1>Bitrade</F1>
          <F2>
            $ 12.96 <span></span>
          </F2>
          <F1>Bitpreco</F1>
          <F2>
            $ 13.07 <span></span>
          </F2>
          <F1>Novadax</F1>
          <F2>
            $ 13.15 <span></span>
          </F2>
          <F1>Coinext</F1>
          <F2>
            $ 14.96 <span></span>
          </F2>
        </Table>
        <SubTitle2>
          <p>
            Actualizado: <span>19 Julio 23:48</span>
          </p>
        </SubTitle2>
      </DivTabla>
    </Section>
  )
}

export default About
