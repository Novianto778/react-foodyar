import React from "react";
import {
  RatingContainer,
  RatingCount,
  RatingItem,
  RatingP,
  RatingWrapper,
} from "./RatingElements";
import VisibilitySensor from "react-visibility-sensor";

const Rating = () => {
  return (
    <RatingContainer>
      <VisibilitySensor>
        {({ isVisible }) => (
          <RatingWrapper>
            <RatingItem>
              <RatingCount
                start={0}
                end={isVisible ? 180000 : 0}
                suffix="+"
                duration={2.5}
                separator="."
              />
              <RatingP>Menu</RatingP>
            </RatingItem>
            <RatingItem>
              <RatingCount
                start={0}
                end={isVisible ? 20000 : 0}
                suffix="+"
                duration={2.5}
                separator="."
              />
              <RatingP>Chefs</RatingP>
            </RatingItem>
            <RatingItem>
              <RatingCount
                start={0}
                end={isVisible ? 400000 : 0}
                suffix="+"
                duration={2.5}
                separator="."
              />
              <RatingP>Courses</RatingP>
            </RatingItem>
            <RatingItem>
              <RatingCount
                start={0}
                end={isVisible ? 6900000 : 0}
                duration={2.5}
                separator="."
              />
              <RatingP>Alumni</RatingP>
            </RatingItem>
          </RatingWrapper>
        )}
      </VisibilitySensor>
    </RatingContainer>
  );
};

export default Rating;
