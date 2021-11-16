import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Icons from "./Icons/Icons";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with a range of technologies in the web development word. From
      Backend to Frontend.
    </SectionText>
    <Icons />
  </Section>
);

export default Technologies;
