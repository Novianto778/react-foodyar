import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 520px;
  display: flex;

  @media screen and (max-width: 768px) {
    height: 340px;
  }
`;

export const HeroWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 85%;
  margin: 0 auto;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const HeroH1 = styled.h1`
  max-width: 560px;
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const HeroP = styled.p`
  max-width: 440px;
  font-size: 20px;
  color: #8b8ba5;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const ButtonWrapper = styled.a`
  display: inline-block;
  text-decoration: none;
  outline: none;
  border: none;
  color: #000;
`;

export const HeroImageWrapper = styled.div`
  width: 55%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroImage = styled.img`
  display: block;
  max-width: 640px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Underline = styled.span`
  position: relative;
  z-index: 10;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 12px;
    left: 0;
    background-color: #ffd2cb;
    visibility: visible;
    border-radius: 5px;
    z-index: -1;

    @media screen and (max-width: 768px){
      bottom: 10px;
    }
  }
`;
