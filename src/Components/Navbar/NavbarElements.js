import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  /* position: sticky;
  top: 0; */
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  align-items: center;
`;

export const NavbarTitle = styled.a`
  display: block;
  font-size: 28px;
  padding: 20px 0;
  font-weight: 500;
  text-decoration: none;
  color: #000;

  @media screen and (max-width: 768px) {
   font-size: 24px;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  margin-left: auto;
  text-decoration: none;
  align-items: center;
`;

export const NavbarItem = styled.li`
  padding: 22px 35px 22px 0;
  font-size: 22px;
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
  display: block;
`;

export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    width: 40px;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


