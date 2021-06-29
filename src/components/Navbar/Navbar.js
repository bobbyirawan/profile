import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { Buttonv1, Buttonv2 } from '../Button';
import icon from '../../assets/icon.gif'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
  NavIcon
} from './Navbar.styles.js';


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const [navbar, setNavbar] = useState(false)
  const [button, setButton] = useState(true);
  
  const showButton = () => {
    if(window.innerWidth <= 768) {
      setButton(false)
    }else {
      setButton(true)
    }
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener("scroll", changeBackground);

  return (
    <>
    <IconContext.Provider value={{color: '#b3b3ff'}}>
      <Nav changeBG={navbar}>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon src={icon} alt="sillia-logo"  />
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
          <NavItem changeBG={navbar}>
              <NavLinks to='home' onClick={handleClick} smooth={true} duration={1000} changeBG={navbar}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem changeBG={navbar}>
              <NavLinks to='services' onClick={handleClick} smooth={true} duration={1000} changeBG={navbar}>
                Portfolio
                </NavLinks>
            </NavItem>
            <NavItem changeBG={navbar}>
              <NavLinks to='skills' onClick={handleClick} smooth={true} duration={1000} changeBG={navbar}>
                Skills
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinkR to='contactus' onClick={handleClick} smooth={true} duration={1000}><Buttonv1> Hubungi</Buttonv1></NavLinkR>
            </NavItem> */}
            
            <NavItemBtn>
              { button ? (
              <NavBtnLink to="contactus" onClick={handleClick}  smooth={true} duration={1000}>
                {/* <Buttonv1> <FaLock /> masuk</Buttonv1> */}
                <Buttonv1>Contact</Buttonv1>
              </NavBtnLink>
              ):(
              <NavBtnLink to="contactus" onClick={handleClick} smooth={true} duration={1000}>
                {/* <Buttonv2><FaLock /> masuk</Buttonv2> */}
                <Buttonv2>Contact</Buttonv2>
              </NavBtnLink>
            )}
            </NavItemBtn>
          </NavMenu>

        </NavbarContainer>

      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
