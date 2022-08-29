import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#contacts">
          <NavLink>Contacts</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Leviantt">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://wa.me/79276938466">
          <FaWhatsapp size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://t.me/dev_lev">
          <FaTelegramPlane size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
