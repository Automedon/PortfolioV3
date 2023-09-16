import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";

const Education = () => (
  <Section id="education">
    <SectionDivider divider />
    <SectionTitle>Education</SectionTitle>
    <SectionText>University of the People</SectionText>
    <SectionText>Location: Pasadena, CA, USA</SectionText>
    <SectionText>Degree: Bachelor of Science</SectionText>
    <SectionText>Field: Computer Science</SectionText>
    <SectionText>GPA: 3.81/4.0 (Magna Cum Laude) </SectionText>
  </Section>
);

export default Education;
