import styled from "styled-components"

export const Footter = styled.footer`
  display: flex;
  width: 100%;
  height: 150px;
  background-color: var(--bitcoin-orange);

  section {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`

export const SectionLeft = styled.section`
  ul {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    list-style: none;
  }
  li {
    margin: 10px 0;
  }
  span {
    text-decoration: none;
    color: var(--just-white);
  }
`
