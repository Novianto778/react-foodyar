import styled from "styled-components";
import CountUp from "react-countup";

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
  justify-content: center;
`;

export const RatingWrapper = styled.div`
  width: 90%;
  max-width: 760px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const RatingItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-basis: 50%;
    margin-bottom: 10px;
  }
  
`;

export const RatingCount = styled(CountUp)`
  font-size: 28px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 0 15px;
  }
`;

export const RatingP = styled.p`
  font-size: 18px;
  color: #8b8ba5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
