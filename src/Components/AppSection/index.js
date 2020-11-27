import React from "react";
import {
  AppContainer,
  AppH2,
  AppWrapper,
  AppImage,
  AppP,
  AppStore,
  GooglePlay,
  AppContent,
  BtnWrapper,
  Underline,
} from "./AppElements";
import { Fade } from "react-reveal";

const AppSection = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <Fade left>
          <AppImage src="/img/app.png" />
        </Fade>
        <Fade right>
          <AppContent>
            <AppH2>
              <Underline>Download</Underline> our app and join{" "}
              <Underline>the contest</Underline>
            </AppH2>
            <AppP>
              In order to improve our cooking skills, we do need a food
              photography
            </AppP>
            <BtnWrapper>
              <AppStore src="/img/appstore.png" />
              <GooglePlay src="/img/androidapp.png" />
            </BtnWrapper>
          </AppContent>
        </Fade>
      </AppWrapper>
    </AppContainer>
  );
};

export default AppSection;
