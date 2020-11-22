import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 560px;
  display: flex;
  margin-top: 60px;
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
  font-size: 58px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.4;
`;

export const HeroP = styled.p`
  max-width: 440px;
  font-size: 22px;
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

export const HeroImage = styled.img `
  display: block;
  max-width: 700px;
  
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

`