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

const AppSection = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <AppImage src="/img/app.png" />
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
      </AppWrapper>
    </AppContainer>
  );
};

export default AppSection;
