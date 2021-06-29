import React from 'react'
import { 
  FaHackerrank,
  FaInstagram, FaLinkedin, 
} from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import icon from "../../assets/icon.gif";
import { 
  FooterContainer, 
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons
} from './Footer.styles'

const Footer = () => {

  const onHackerrank = () => {
    window.open("https://hackerrank.com/profile/bobbyirawan3011", "_blank")
  }

  const onLinkedin = () => {
    window.open("https://linkedin.com/in/bobby-irawan-99tech", "_blank")
  }

  const onInstagram = () => {
    window.open("https://www.instagram.com/bobby20s/", "_blank")
  }

  const onEmail = () => {
    window.open("mailto: bobbyirawan3011@yahoo.com", "_blank")
  }

  return (
    <FooterContainer name="contactus">

      <SocialMedia>
        <SocialMediaWrap>

          <SocialLogo to="/">
            <img src={icon} alt="sillia-logo" style={{height: "50px"}} />
          </SocialLogo>

          <WebsiteRights>Design &#38; Built by Bobby Irawan</WebsiteRights>

          <SocialIcons>
            <SocialIconLink onClick={onInstagram} target="_blank" arial-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink onClick={onLinkedin} target="_blank" arial-label="Facebook">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink onClick={onEmail} target="_blank" arial-label="Whatsapp">
              <MdEmail />
            </SocialIconLink>
            <SocialIconLink onClick={onHackerrank} target="_blank" arial-label="Twitter">
              <FaHackerrank />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>

    </FooterContainer>

  )
}

export default Footer
