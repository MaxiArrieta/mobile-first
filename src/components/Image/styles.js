import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  min-width: 320px;
  height: 50vh;
  background-image: url(${props => props.imagen});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  h2 {
    padding-top: 60px;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--just-white);
  }
`
