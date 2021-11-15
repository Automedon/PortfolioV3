import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        Automedon Portfolio
      </SectionTitle>
      <SectionText>
        I am a Senior Software Engineer with a focus on Frontend with
        React/TypeScript.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/Automedon")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
