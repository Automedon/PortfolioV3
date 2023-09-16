import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 100, text: "Open Source Projects" },
  { number: 670, text: "Github Followers" },
  { number: 409, text: "Github Stars" },
  { number: "1 kuy", text: "CodeWars Rank" },
  { number: "213", text: "CodeWars Leaderboard Position" },
  { number: "20,720", text: "CodeWars Honor" },
  { number: "0.037%", text: "Honor Percentile Top" },
  { number: "3,880", text: "Total Completed Kata" }
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
