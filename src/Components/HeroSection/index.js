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
import { Fade } from "react-reveal";

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
          <ButtonWrapper href="#menu">
            <Button orange fontBig>
              Decide A Menu
            </Button>
          </ButtonWrapper>
        </HeroContent>

        <Fade right>
          <HeroImageWrapper>
            <HeroImage src="/img/hero.png" />
          </HeroImageWrapper>
        </Fade>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
