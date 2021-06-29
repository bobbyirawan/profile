import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  /* background: ${({lightBg}) => (lightBg ? '#fff' : '#e69500')}; */
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border: 6px solid white;

  background-color: #923cb5;
background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%);
  
  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`
export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 20px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  &:nth-child(1) {
    border-left: 4px solid white;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 25px;
      background: red;
      transform: skewY(-60deg);
      transition: .4s linear;

      left: -4px;
      bottom: 10%;

      @media screen and (max-width: 768px) {
        bottom: 15%;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 4px;
      height: 60px;
      background: red;
      transform: skewY(-60deg);
      transition: .4s linear;

      left: -4px;
      bottom: 25%;
    }
    
  }
  
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;

  }
`

export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '#f0ffe6' : '#4859F7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};

  @media screen and  (max-width: 340px) {
    font-size: 35px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? "#f0ffe6" : '#1c2237')};

  @media screen and  (max-width: 340px) {
    font-size: 16px;
  }
`
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 400px;
`