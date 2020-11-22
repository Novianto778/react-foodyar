import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  MenuItem,
  MenuList,
  ButtonWrapper,
} from "./SidebarElements";
import { Button } from "../ButtonElements";

const Sidebar = ({handleOpen}) => {
  return (
    <SidebarContainer>
      <CloseIcon src="/img/close.svg" onClick={handleOpen} />
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Beverages</MenuItem>
        <MenuItem>Chef</MenuItem>
        <MenuItem>Ingredients</MenuItem>
        <MenuItem>Stories</MenuItem>
      </MenuList>
      <ButtonWrapper>
        <Button fontBig orange big >My Kitchen</Button>
      </ButtonWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
