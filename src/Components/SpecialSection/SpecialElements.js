import styled from "styled-components";

export const SpecialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const SpecialWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SpecialP = styled.p`
  font-size: 20px;
  color: #8b8ba5;
  margin-bottom: 5px;
`;

export const SpecialH2 = styled.h2`
  font-size: 32px;
  color: #272042;
  margin-bottom: 5px;
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
`;

export const TabItem = styled.div`
  display: flex;
  font-size: 24px;
  margin: 0 15px;
  position: relative;
  transition: all .35s ease;
  color: ${({ tabActive }) => (tabActive ? "#F7C531" : "#000")};
  font-weight: 500;

    &::before {
        content: "";
        position: absolute;
        width: 75%;
        height: 2px;
        bottom: 0;
        left: 10%;
        background-color: #F7C531;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover {
        cursor: pointer;

        &::before {
            visibility: visible;
            transform: scaleX(1);
        }
    }
  
`;
