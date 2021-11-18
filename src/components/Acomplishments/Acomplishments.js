import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 40, text: "Open Source Projects" },
  { number: 265, text: "Github Followers" },
  { number: 400, text: "Github Stars" },
  { number: "1 kuy", text: "CodeWars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
