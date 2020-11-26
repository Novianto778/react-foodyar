import React from "react";
import {
  TestimonialContainer,
  TestimonialText,
  TestimonialWrapper,
  ProfileImage,
  ProfileJob,
  ProfileName,
  ProfileWrapper,
} from "./TestimonialElements";

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <TestimonialText>
          Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka
          lebih suka makan malam di rumah demi menyantap masakan yang saya buat
          sendiri
        </TestimonialText>
        <ProfileWrapper>
          <ProfileImage src="/img/pic-1.png" />

          <ProfileName>Camella Sarrah</ProfileName>
          <ProfileJob>Vege Master</ProfileJob>
        </ProfileWrapper>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
};

export default Testimonial;
