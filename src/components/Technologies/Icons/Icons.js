import React from "react";
import { SectionTitle } from "../../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListTitle,
  ListIcon,
} from "./IconsStyles";
import { frontendIcons, languagesIcons, backendIcons } from "./IconsData";

const Icons = () => (
  <>
    <SectionTitle>Languages</SectionTitle>
    <List>
      {languagesIcons
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(({ icon, title, href }) => (
          <ListItem key={title}>
            <a href={href}>
              <ListIcon src={icon} />
            </a>
            <ListContainer>
              <a href={href}>
                <ListTitle>{title}</ListTitle>
              </a>
            </ListContainer>
          </ListItem>
        ))}
    </List>
    <SectionTitle>Frontend</SectionTitle>
    <List>
      {frontendIcons
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(({ icon, title, href }) => (
          <ListItem key={title}>
            <a href={href}>
              <ListIcon src={icon} />
            </a>
            <ListContainer>
              <a href={href}>
                <ListTitle>{title}</ListTitle>
              </a>
            </ListContainer>
          </ListItem>
        ))}
    </List>
    <SectionTitle>Backend</SectionTitle>
    <List>
      {backendIcons
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(({ icon, title, href }) => (
          <ListItem key={title}>
            <a href={href}>
              <ListIcon src={icon} />
            </a>
            <ListContainer>
              <a href={href}>
                <ListTitle>{title}</ListTitle>
              </a>
            </ListContainer>
          </ListItem>
        ))}
    </List>
  </>
);

export default Icons;
