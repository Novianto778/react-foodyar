import React from "react";
import {
  FooterContainer,
  FooterItem,
  FooterList,
  FooterMenuWrapper,
  FooterCopyright,
  FooterMenuContainer,
  FooterMenu
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMenuContainer>
        <FooterMenu>
          <FooterMenuWrapper>
            <FooterItem>
              <FooterList title>Foodyar</FooterList>
            </FooterItem>
            <FooterItem>
              <FooterList title>Special Course</FooterList>
              <FooterList>Wedding Foods</FooterList>
              <FooterList>Healthy and Muscle</FooterList>
              <FooterList>Office Food Daily</FooterList>
              <FooterList>Happy Kids</FooterList>
            </FooterItem>
          </FooterMenuWrapper>
          <FooterMenuWrapper>
            <FooterItem>
              <FooterList title>Company</FooterList>
              <FooterList>APIs Developer</FooterList>
              <FooterList>Career</FooterList>
              <FooterList>Terms & Conditions</FooterList>
              <FooterList>Privacy Policy</FooterList>
            </FooterItem>
            <FooterItem>
              <FooterList title>Be Our Friend</FooterList>
              <FooterList>3, Season Park, Jakarta</FooterList>
              <FooterList>support@foodyar.co,id</FooterList>
              <FooterList>021 - 1111 - 2222</FooterList>
              <FooterList>IG: novianto718</FooterList>
            </FooterItem>
          </FooterMenuWrapper>
        </FooterMenu>
      </FooterMenuContainer>
      <FooterCopyright>
        All Rights Reserved Foodyar by Pixel from BuildWith Angga 2020
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
