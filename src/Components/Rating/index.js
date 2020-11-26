import React from "react";
import {
  RatingContainer,
  RatingCount,
  RatingItem,
  RatingP,
  RatingWrapper,
} from "./RatingElements";

const Rating = () => {
  return (
    <RatingContainer>
      <RatingWrapper>
        <RatingItem>
          <RatingCount
            start={0}
            end={180000}
            suffix="+"
            duration={2.5}
            separator="."
          />
          <RatingP>Menu</RatingP>
        </RatingItem>
        <RatingItem>
          <RatingCount
            start={0}
            end={20000}
            suffix="+"
            duration={2.5}
            separator="."
          />
          <RatingP>Chefs</RatingP>
        </RatingItem>
        <RatingItem>
          <RatingCount
            start={0}
            end={400000}
            suffix="+"
            duration={2.5}
            separator="."
          />
          <RatingP>Courses</RatingP>
        </RatingItem>
        <RatingItem>
          <RatingCount start={0} end={6900000} duration={2.5} separator="." />
          <RatingP>Alumni</RatingP>
        </RatingItem>
      </RatingWrapper>
    </RatingContainer>
  );
};

export default Rating;
