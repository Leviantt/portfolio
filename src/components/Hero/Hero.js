import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const handleClick = () => {
    document.getElementById("projects").scrollIntoView(true);
  };
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            My name is Lev
            <br />
            and I am a Frontend Developer
          </SectionTitle>
          <SectionText>
            I build things for the web. <br />
            Below you can see my work and skills.
          </SectionText>
          <Button onClick={handleClick}>Learn More</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
