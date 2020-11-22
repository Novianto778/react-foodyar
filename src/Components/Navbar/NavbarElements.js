import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;

export const NavbarTitle = styled.div`
  font-size: 24px;
  padding: 20px 0;
  font-weight: 500;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  margin-left: auto;
  text-decoration: none;
  align-items: center;
`;

export const NavbarItem = styled.li`
  padding: 22px 35px 22px 0;
  font-size: 18px;
  list-style: none;
  font-weight: ${({ active }) => (active ? 500 : 400)};

  &:hover {
    color: #f7c531;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    width: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
