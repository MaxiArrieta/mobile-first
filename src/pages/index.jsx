import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import About from "../components/About"
import Benefits from "../components/Benefits"
import Image from "../components/Image"
import Payment from "../components/Payment"
import { Main } from "../styles"

const IndexPage = () => (
  <>
    <Layout />
    <Header />
    <Main>
      <About />
      <Benefits />
      <Image />
      <Payment />
    </Main>
  </>
)

export default IndexPage
