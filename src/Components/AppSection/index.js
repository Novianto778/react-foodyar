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
} from "./AppElements";

const AppSection = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <AppImage src="/img/app.png" />
        <AppContent>
          <AppH2>Download our app and join the contest</AppH2>
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
