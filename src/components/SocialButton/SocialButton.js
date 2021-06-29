import React from 'react'
import { 
    Email, 
    Instagram, 
    Linkedin, 
    Social, 
    SocialIconLInk, 
    SocialMenu, 
    Hackerrank
} from './SocialButton.styles'

const SocialButton = () => {

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
        <Social >
            <SocialMenu>
                <SocialIconLInk onClick={onHackerrank} target="_blank" arial-label="Hackerrank" >
                    Hackerrank
                    <Hackerrank />
                </SocialIconLInk>
                <SocialIconLInk onClick={onInstagram} target="_blank" arial-label="instagram" >
                    @bobby20s
                    <Instagram />
                </SocialIconLInk>
                <SocialIconLInk onClick={onEmail} target="_blank" arial-label="email" >
                Email
                    <Email />
                </SocialIconLInk>
                <SocialIconLInk onClick={onLinkedin} target="_blank" arial-label="Linkedin" >
                Linkedin    
                    <Linkedin />
                </SocialIconLInk>
            </SocialMenu>
        </Social>
    )
}

export default SocialButton
