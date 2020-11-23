import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 520px;
  display: flex;
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
`;

export const HeroP = styled.p`
  max-width: 440px;
  font-size: 20px;
  color: #8b8ba5;
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const HeroImageWrapper = styled.div`
  width: 55%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
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
  }
`;
