import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarTitle,
  NavbarMenu,
  NavbarItem,
  MenuIcon,
  ButtonWrapper,
  Icon,
} from "./NavbarElements";
import { Button } from "../ButtonElements";

const Navbar = ({ handleOpen }) => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarTitle>Foodyar</NavbarTitle>
        <NavbarMenu>
          <Icon onClick={handleOpen}>
            <MenuIcon src="/img/menu.svg" />
          </Icon>
          <NavbarItem active>Home</NavbarItem>
          <NavbarItem>Beverages</NavbarItem>
          <NavbarItem>Chef</NavbarItem>
          <NavbarItem>Ingredient</NavbarItem>
          <NavbarItem>Stories</NavbarItem>
          <ButtonWrapper>
            <Button>My Kitchen</Button>
          </ButtonWrapper>
        </NavbarMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
