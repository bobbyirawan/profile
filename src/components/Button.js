import styled from "styled-components";


export const FloatingButton = styled.a`
  background: green;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 10000;
  font-size: 35px;
  color: #fff;
  display: flex;
  justify-content:center;
  align-items: center;
`

export const Buttonv1 = styled.button`
  position: relative;
  padding: 8px 20px;
  margin: 10px 0;
  color: #63A4FF;
  text-transform: uppercase;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #63A4FF;
  outline: none;
  cursor: pointer;
  background: transparent;

  &:hover {
    color: #262626;
    background-color: #63a4ff;
    background-image: linear-gradient(-315deg, #63a4ff 0%, #83eaf1 74%);
    border: none;
    margin: 1px;
  }
`

export const Buttonv2 = styled.button`
  position: relative;
  outline: none;
  background: #262626;
  padding: 12px 36px;
  margin: 10px 0;
  margin-top:20px;
  letter-spacing: 2px;
  font-size: 18px;
  border-radius: 25px;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
               5px 5px 15px rgba(0, 0, 0, 0.5);
               /* inset 2px 2px 4px rgba(255, 255, 255, 0.1) ; */

  &:hover {
    box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.05),
               inset 5px 5px 15px rgba(0, 0, 0, 0.5);
  }
`

export const ButtonV4 = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  background: ${({BtnBg}) => (BtnBg ? "#e69500" : "transparent") };
  border: none;
  outline: none;
  position: relative;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.05),
               inset 5px 5px 15px rgba(0, 0, 0, 0.5);
`
// const anim = keyframes `
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;
export const DownloadV1 = styled.button `
  background: none;
  border: 4px solid #ffff33;
  color: white;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  position: relative;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;


  &:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: red;
    transform: skewX(50deg);
    transition: .4s linear;

    top: -4px;
    left: 10%;
  }

  &:hover::before  {
    left: 80%;
    transform: skewX(-50deg);
  }

  

  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: red;
    transform: skewX(50deg);
    transition: .4s linear;

    bottom: -4px;
    right: 10%;
  }
  &:hover::after {
    right: 80%;
    transform: skewX(-50deg);
  }
`;

