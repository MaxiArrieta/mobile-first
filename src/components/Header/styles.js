import styled from "styled-components"

export const Section = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  height: 334px;
  text-align: center;
  background: linear-gradient(207.8deg, #201e1c 16.69%, #f7931a 100%);

  img {
    width: 150px;
    height: 24px;
    margin-top: 60px;
    align-self: center;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--just-white);
  }

  p {
    margin-top: 25px;
    font-size: 1.4rem;
    font-weight: 500px;
    line-height: 1.8rem;
    color: var(--soft-orange);
  }
`
export const Div = styled.div`
  width: 90%;
  min-width: 290px;
  max-width: 900px;
  height: 218px;
  margin-top: 40px;
  text-align: center;
  align-self: center;
`

export const Botton = styled.a`
  position: absolute;
  /* Hago un calculo  para centrarlo */
  left: calc(50% - 118px);
  top: 270px;
  display: block;
  margin-top: 35px;
  padding: 15px;
  width: 229px;
  height: 48px;
  background-color: var(--off-white);
  /* Sombras */
  box-shadow: 0px 4px 8px rgba(89, 73, 30, 0.16);
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--back);

  span {
    display: inline-block;
    width: 13px;
    height: 8px;
    margin-left: 10px;
    /* Resivo por prop la url de la imagen */
    background-image: url(${props => props.imagenUrl});
  }
`
