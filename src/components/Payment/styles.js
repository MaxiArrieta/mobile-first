import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  min-width: 320px;
  padding-bottom: 70px;
  text-align: center;
`
export const Div = styled.div`
  width: 90%;
  min-width: 288px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 50px;

  h2 {
    padding-top: 50px;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--black);
  }

  p {
    padding-top: 30px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: #757575;
  }
`
export const Cards = styled.div`
  display: flex;
  height: 316px;
  /* Al ponerlas en flex sobresale del tamaño de pantalla definido 
    cuando eso sucede tengo que usar un overflow, quiero que haga un tipo de 
    overflow en el eje x de tipo scroll
  */
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;

  @media (min-width: 930px) {
    justify-content: center;
  }
`
