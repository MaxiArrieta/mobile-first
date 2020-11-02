import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 30px;
  text-align: center;
`

export const Div = styled.div`
  width: 90%;
  min-width: 288px;
  max-width: 900px;
  margin: 0 auto;

  h2 {
    margin-bottom: 30px;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--back);
  }

  p {
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
    color: #757575;
  }
`
export const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-image: url(${props => props.imagen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const DivTabla = styled.section`
  scroll-snap-align: center;
  width: 70%;
  min-width: 235px;
  max-width: 500px;
  margin: 0 30px;
  font-family: "Inter", sans-serif;
`

export const Title = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.3rem;
  color: var(--bitcoin-orange);
`
export const Title2 = styled.p`
  /* margin-top: 20px; */
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.3rem;
  color: var(--secondary-blue);
`
export const SubTitle = styled.div`
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 12px;
  background-color: var(--soft-orange);
  border-radius: 8px;

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: bold;
    color: var(--warm-black);
  }
  span {
    font-weight: 500;
  }
`
export const SubTitle2 = styled.div`
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 12px;
  background-color: var(--soft-blue);
  border-radius: 8px;

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: bold;
    color: var(--warm-black);
  }
  span {
    font-weight: 500;
  }
`

export const Table = styled.div`
  width: 90%;
  min-width: 230px;
  max-width: 300px;
  height: 250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 1.5px;
  background-color: var(--just-white);
  border-radius: 20px;
`
export const F1 = styled.div`
  margin: auto;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: var(--grey);
`
export const F2 = styled.div`
  margin: auto;
  font-size: 1.3rem;
  font-weight: normal;
  line-height: 1.7rem;
  color: #757575;
  display: inline-block;
  margin-left: 10px;

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 20px;
    background-size: cover;
    background-image: url(${props => props.imagen});
  }
`
export const DivScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  margin: 0 32px;
  @media (min-width: 930px) {
    display: flex;
    width: 930px;
    margin: 0 auto;
  }
`
