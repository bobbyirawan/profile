import styled from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import { SiHackerrank } from 'react-icons/si';

export const Social = styled.nav`
    position: fixed;
    top: 30%;
    background: transparent;
    z-index: 999;
    transform: translateX(-270px);
`;

export const SocialMenu = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    
`;

export const SocialIconLInk = styled.li `
    display: block;
    margin: 5px;
    background-color: rgba(0,0,0,0.5);
    width: 300px;
    text-align: right;
    border-radius: 0 30px 30px 0;
    transition: all 1s;
    cursor: pointer;
    color: transparent;
    font-size: 12px;
    text-transform: uppercase;

    &:hover {
        transform: translateX(110px);
        color: white;
        &:nth-child(1) {
            background-color: green;
        }
        &:nth-child(2) {
            background-color: green;
        }
        &:nth-child(3) {
            background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        }
        &:nth-child(4) {
            background-color: #000099;
        }
        &:nth-child(5) {
            background-color: #8080ff;
        }
    }
`;

export const Hackerrank = styled(SiHackerrank) `
    text-align: center;
    margin: 5px 5px 5px 14px;
    color: green;
    background-color: #ffffff;
    padding: 1px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 50px;
    transform: rotate(0deg);
    display: inline-block;
    vertical-align: middle;
`;

export const Instagram = styled(FaInstagram) `
    text-align: center;
    margin: 5px 5px 5px 14px;
    color: #8080ff;
    padding: 1px;
    background-color: #ffffff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    display: inline-block;
    vertical-align: middle;
`;

export const Linkedin = styled(FaLinkedin) `
    text-align: center;
    margin: 5px 5px 5px 14px;
    color: #8080ff;
    padding: 1px;
    background-color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    display: inline-block;
    vertical-align: middle;
`;

export const Email = styled(MdEmail) `
    text-align: center;
    margin: 5px 5px 5px 14px;
    color: #000099;
    padding: 1px;
    background-color: #ffffff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    display: inline-block;
    vertical-align: middle;
`;