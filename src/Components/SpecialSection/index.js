import React from "react";
import {
  SpecialContainer,
  SpecialWrapper,
  SpecialP,
  SpecialH2,
  TabItem,
  TabMenu,
} from "./SpecialElements";

const SpecialSection = () => {
  return (
    <SpecialContainer>
      <SpecialWrapper>
        <SpecialP>Watch Now</SpecialP>
        <SpecialH2>Special to Try</SpecialH2>
        <TabMenu>
          <TabItem>Healthy Food</TabItem>
          <TabItem>Lunch</TabItem>
          <TabItem>Vege Desert</TabItem>
          <TabItem>Shake</TabItem>
        </TabMenu>
      </SpecialWrapper>
    </SpecialContainer>
  );
};

export default SpecialSection;
