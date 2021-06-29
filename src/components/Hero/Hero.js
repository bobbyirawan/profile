import React, { useEffect } from 'react'
import { Link } from "react-scroll";
import { Container } from '../../GlobalStyle'
import pdf from "../../assets/certificate.pdf"
import { 
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
 } from './Hero.styles'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DownloadV1  } from '../Button';

const Hero = ({
  lightBg, 
  lightTopLine, 
  lightTextDesc, 
  description,
  headline, 
  topLine, 
  lightText, 
  img,
  alt,
  imgStart, 
  start,
}) => {

  const onCertificate = () => {
    window.open(pdf, "_blank")
    }

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <>
      <InfoSec lightBg={lightBg} name="home"  >
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper data-aos="zoom-out-up">
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link onClick={onCertificate} smooth={true} duration={1000}>
                  <DownloadV1> Certificate</DownloadV1>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn >
              <ImgWrapper start={start} data-aos="zoom-in-left">
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      
    </>
      
  )
}

export default Hero
