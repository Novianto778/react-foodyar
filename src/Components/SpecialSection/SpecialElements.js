import styled from "styled-components";

export const SpecialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TabItem = styled.div`
  display: flex;
  font-size: 24px;
  margin: 0 15px;
  position: relative;
  text-transform: capitalize;
  transition: all 0.35s ease;
  color: ${({ tabActive }) => (tabActive ? "#F7C531" : "#000")};

  &::before {
    content: "";
    position: absolute;
    width: 75%;
    height: 2px;
    bottom: 0;
    left: 10%;
    background-color: #f7c531;
    visibility: ${({ tabActive }) => (tabActive ? "visible" : "hidden")};
    transform: ${({ tabActive }) => (tabActive ? "scaleX(1)" : "scaleX(0)")};
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    cursor: pointer;

    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const MenuImage = styled.img`
  display: block;
  max-width: 240px;
`;

export const MenuH3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: 10px;
`;

export const MenuP = styled.p`
  font-size: 14px;
  text-transform: capitalize;
  margin-top: 5px;
  color: #8b8ba5;
`;
