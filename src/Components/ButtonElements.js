import styled from "styled-components";

export const Button = styled.div`
  padding: ${({ big }) => (big ? "12px 40px" : "12px 25px")};
  background-color: ${({ orange }) => (orange ? "#f7c531" : "#FBE0DC")};
  border-radius: 30px 30px 15px 15px;
  font-weight: 500;
  cursor: pointer;
  font-size: ${({fontBig}) => (fontBig ? "22px" : "16px")}
`;
