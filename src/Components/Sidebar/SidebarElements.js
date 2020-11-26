import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 70%;
  margin-left: 30%;
  display: grid;
  height: 100%;
  background: #fbe0dc;
  align-items: center;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 28px;
  right: 20px;
  width: 30px;
  cursor: pointer;
`;

export const MenuList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #f7c531;
    transition: 0.2s ease-in-out;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -120px;
`;
