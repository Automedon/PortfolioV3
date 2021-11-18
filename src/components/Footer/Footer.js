import React from "react";
import { AiFillGithub, AiFillCode, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <Section id="contacts">
      <SectionDivider divider />
      <SectionTitle>Contacts</SectionTitle>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Telegram</LinkTitle>
            <LinkItem href="https://t.me/reactnextjsdeveloper">
              @reactnextjsdeveloper
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:inzhener.intellect@gmail.com">
              inzhener.intellect@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              If you think good architecture is expensive, try bad architecture.
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/Automedon">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/frontreactdeveloper/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.codewars.com/users/Valefar">
              <AiFillCode size="3rem" />
            </SocialIcons>{" "}
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
