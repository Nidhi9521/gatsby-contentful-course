import React from "react";
import { HeroWrapper, HeadingWrapper, Heading, SubHeading } from "./style";
import { BgImage } from "gbimage-bridge";
export const Hero = ({ heading, subHeadig, backgroundImage }) => {
  return (
    <HeroWrapper>
      <BgImage image={backgroundImage}>
        <HeadingWrapper>
          <div>
            <Heading>{heading}</Heading>
            <SubHeading>{subHeadig}</SubHeading>
          </div>
        </HeadingWrapper>
      </BgImage>
    </HeroWrapper>
  );
};
