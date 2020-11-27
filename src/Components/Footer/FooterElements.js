import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
`;

export const FooterMenuWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

export const FooterMenu = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  @media screen and (max-width: 768px) {
    min-width: 50%;
  }

  @media screen and (max-width: 460px) {
    min-width: 100%;
    margin-left: 40%;
  }
`;

export const FooterMenuContainer = styled.div`
  width: 100%;
  border: 1px solid #ececec;
`;

export const FooterList = styled.div`
  color: ${({ title }) => (title ? "#000" : "#8B8BA5")};
  font-weight: ${({ title }) => (title ? "500" : "400")};
  font-size: ${({ title }) => (title ? "22px" : "18px")};
  margin-bottom: 10px;
`;

export const FooterCopyright = styled.div`
  font-size: 16px;
  color: #8b8ba5;
  padding: 15px 0;
  width: 90%;
  margin: 0 auto;
  display: flex;
  text-align: center;
`;
