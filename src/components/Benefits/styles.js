import styled from "styled-components"

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-width: 320px;
  height: auto;
  padding: 20px 10px;
  background-color: var(--warm-black);
`
export const Span = styled.span`
  position: absolute;
  width: 40px;
  height: 25px;
  top: -10px;
  left: calc(50% - 20px);
  background-image: url(${props => props.imageUrl});
`
export const Div = styled.div`
  width: 90px;
  min-width: 288px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--just-white);
  }

  p {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: #808080;
  }
`
export const DivCards = styled.div`
  @media (min-width: 930px) {
    display: flex;
    flex-wrap: wrap;
    width: 930px;
    margin: 0 auto;
  }
`
