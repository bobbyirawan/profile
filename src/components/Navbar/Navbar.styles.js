import styled from "styled-components";
import { Link as LinkS} from "react-scroll";
import { Link as LinkR } from "react-router-dom"
import { Container } from "../../GlobalStyle";

export const Nav = styled.nav`
  background: ${({changeBG}) => (changeBG ? 'white' : "transparent")};
  width: 100%;
  color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 999;

  &:hover {
    color: red;
  }


`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;
`
export const NavLogo = styled(LinkR)`
  color: #b3b3ff;
  justify-content: flex-start;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: bold;
`
export const NavIcon = styled.img`
  height: 100%;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
    background: #262626;

  }
`
export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({changeBG}) => (changeBG ? "#000080" : 'white')};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`
export const NavLinks = styled(LinkS)`
  color: ${({changeBG}) => (changeBG ? "#333333" : 'white')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  outline: none;

   @media screen and (max-width: 768px) {
     text-align: center;
     padding: 2rem;
     width: 100%;
     display: table;
     color: #fff;

     &:hover {
       color: #4559f7;
       transition: all 0.3s ease;
     }
   }
`
export const NavItemBtn = styled.li`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`
export const NavBtnLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`
