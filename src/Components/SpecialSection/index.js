import React from "react";
import {
  SpecialContainer,
  SpecialWrapper,
  SpecialP,
  SpecialH2,
  TabItem,
  TabMenu,
  MenuWrapper,
  MenuItem,
  MenuImage,
  MenuH3,
  MenuP,
} from "./SpecialElements";
import { data } from "../data";

const SpecialSection = ({ tabActive, handleTabActive }) => {
  const dataActive = data.slice(tabActive, tabActive + 1);
  return (
    <SpecialContainer id="menu">
      <SpecialWrapper>
        <SpecialP>Watch Now</SpecialP>
        <SpecialH2>Special to Try</SpecialH2>
        <TabMenu>
          {data.map((d, index) => (
            <TabItem
              key={index}
              tabActive={index === tabActive ? true : false}
              onClick={() => handleTabActive(index)}
            >
              {d.type}
            </TabItem>
          ))}
        </TabMenu>
        <MenuWrapper>
          {dataActive[0].img.map((data, index) => (
            <MenuItem key={index}>
              <MenuImage src={data.url} />
              <MenuH3>{data.name}</MenuH3>
              <MenuP>{data.chef}</MenuP>
            </MenuItem>
          ))}
          {/* <MenuItem>
            <MenuImage src="/img/1.png" />
            <MenuH3>Avocado Muscle</MenuH3>
            <MenuP>John Lennonk</MenuP>
          </MenuItem>
          <MenuItem>
            <MenuImage src="/img/2.png" />
            <MenuH3>Avocado Muscle</MenuH3>
            <MenuP>John Lennonk</MenuP>
          </MenuItem>
          <MenuItem>
            <MenuImage src="/img/3.png" />
          </MenuItem>
          <MenuItem>
            <MenuImage src="/img/4.png" />
          </MenuItem> */}
        </MenuWrapper>
      </SpecialWrapper>
    </SpecialContainer>
  );
};

export default SpecialSection;
