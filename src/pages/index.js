import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import About from "../components/About"
import Beneficios from "../components/Beneficios"
import { Main } from "../styles"

const IndexPage = () => (
  <>
    <Layout />
    <Header />
    <Main>
      <About />
      <Beneficios />
    </Main>
  </>
)

export default IndexPage
