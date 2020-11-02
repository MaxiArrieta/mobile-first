import styled from "styled-components"

export const Article = styled.article`
  position: relative;
  /* Lo que el scroll-snap-align hace es que no te deja en medio de las
    tarjetas, te lleva siempre al centro de una de ellas
   */
  scroll-snap-align: center;
  width: 70%;
  min-width: 190px;
  max-width: 300px;
  height: 250px;
  margin: 50px 5px 0;
  padding: 0 15px;
  background-color: var(--just-white);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(89, 73, 30, 0.16);
`
export const Title = styled.p`
  position: absolute;
  width: 120px;
  height: 31px;
  left: calc(50% - 60px);
  top: -15px;
  font-size: 1.2rem;
  padding: 6px;
  background-color: var(--bitcoin-orange);
  border-radius: 8px;
  color: var(--just-white);
`
export const H3 = styled.h3`
  padding-top: 30px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8;
  color: black;
`
export const Price = styled.p`
  padding: 5px 0;
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 5.3rem;
  color: black;

  span {
    font-size: 1.2rem;
    font-weight: 300;
    vertical-align: text-top;
  }
`
export const Saving = styled.p`
  font-size: 1.2rem;
  color: #757575;
`

export const Button = styled.button`
  width: 150px;
  height: 48px;
  margin-top: 20px;
  background-color: #faf8f7;
  border: 2px solid var(--bitcoin-orange);
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.8rem;
  color: var(--black);

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${props => props.imageUrl});
    vertical-align: text-bottom;
  }
`
