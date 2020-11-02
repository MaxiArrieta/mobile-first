import styled from "styled-components"

export const Article = styled.article`
  width: 90%;
  min-width: 288px;
  max-width: 380px;
  min-height: 150px;
  margin: 15px auto;
  padding: 15px;
  background-color: var(--black);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  h3 {
    margin-bottom: 13px;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.8rem;
    color: var(--just-white);
  }
  p {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: #808080;
  }
`
