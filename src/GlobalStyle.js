import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  

  @media screen and (max-width: 911px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const Button = styled.button`
  display: ${({none}) => (none ? 'none' : 'inline-block')};
  border-radius: 4px;
  background: ${({primary}) => (primary ? '#4B59F7' : '#00000000')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid #fff;
  cursor:pointer;

  &:hover {
    transition: all 0.3s ease-ease-out;
    color: yellow;
    background: ${({primary}) => (primary ? '0467FB' : '4B59F7')};
  }
`

export default GlobalStyle