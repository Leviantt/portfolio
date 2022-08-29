import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
          <SectionTitle main center>
            Contacts
          </SectionTitle>
      <LinkList id="contacts">
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nefedov.lewa@gmail.com">
            nefedov.lewa@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Leviantt">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/79276938466">
            <FaWhatsapp size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/dev_lev">
            <FaTelegramPlane size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
