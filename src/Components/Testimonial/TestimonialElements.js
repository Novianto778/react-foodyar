import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
  margin-top: 160px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const TestimonialText = styled.div`
  display: flex;
  text-align: center;
  font-size: 36px;
  max-width: 735px;
  z-index: 5;
  position: relative;
  margin-bottom: 20px;

  &::before {
    content: open-quote;
    position: absolute;
    font-size: 500px;
    top: 0;
    margin-top: -220px;
    margin-left: -140px;
    z-index: -1;
    color: #e5e5e5;
    font-weight: 700;

    @media screen and (max-width: 768px) {
    font-size: 400px;
    margin-left: -50px;
    margin-top: -180px;
  }
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ProfileWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  grid-template-areas:
    "col1 col2"
    "col1 col3";
  column-gap: 15px;
`;

export const ProfileImage = styled.img`
  display: block;
  width: 90px;
  grid-area: col1;
`;

export const ProfileName = styled.h6`
  font-size: 22px;
  font-weight: 500;
  grid-area: col2;
`;
export const ProfileJob = styled.p`
  font-size: 16px;
  grid-area: col3;
  color: #8b8ba5;
`;
