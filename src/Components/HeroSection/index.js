import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroWrapper,
  HeroH1,
  HeroP,
  ButtonWrapper,
  HeroImage,
  HeroImageWrapper,
  Underline,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <HeroH1>
            <Underline>Eat</Underline> What You Cook With Us,{" "}
            <Underline>Together!</Underline>
          </HeroH1>
          <HeroP>
            When you eat something that cooked by yourself, the happiness is
            priceless.
          </HeroP>
          <ButtonWrapper>
            <Button orange fontBig>
              Decide A Menu
            </Button>
          </ButtonWrapper>
        </HeroContent>
        <HeroImageWrapper>
          <HeroImage src="/img/hero.png" />
        </HeroImageWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
