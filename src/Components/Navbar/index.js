import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarTitle,
  NavbarMenu,
  NavbarItem,
  MenuIcon,
  ButtonWrapper,
} from "./NavbarElements";
import { Button } from "../ButtonElements";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarTitle>Foodyar</NavbarTitle>
        <NavbarMenu>
          <MenuIcon src="/img/menu.svg" />
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
