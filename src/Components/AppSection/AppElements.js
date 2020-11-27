import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;

export const AppWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BtnWrapper = styled.div`
  display: flex;
`;

export const AppImage = styled.img`
  display: block;
  max-width: 430px;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AppH2 = styled.h2`
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 20px;
  max-width: 445px;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    line-height: 1.2;
    font-size: 38px;
  }
`;

export const AppP = styled.p`
  font-size: 20px;
  color: #8b8ba5;
  margin-bottom: 50px;
  max-width: 345px;
  line-height: 1.4;
  @media screen and (max-width: 768px) {
    line-height: 1;
    font-size: 18px;
  }
`;

export const AppStore = styled.img`
  display: block;
  max-width: 170px;
  margin-right: 15px;
`;

export const GooglePlay = styled.img`
  display: block;
  max-width: 170px;
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
    bottom: 15px;
    left: 0;
    background-color: #ffd2cb;
    visibility: visible;
    border-radius: 5px;
    z-index: -1;
  }
`;