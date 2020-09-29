import React from 'react';

import Navbar from 'components/navbar';

import { StyledHeader, SwitchWrapper } from './header.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Switch from 'components/switch';

function Header() {
  const router = useRouter();
  return (
    <StyledHeader>
      <h1 {...(router.pathname == '/' && { className: 'active' })}>
        <Link href="/">
          <a>Loserkid</a>
        </Link>
      </h1>
      <Navbar router={router} />
      <SwitchWrapper>
        <Switch />
      </SwitchWrapper>
    </StyledHeader>
  );
}

export default Header;
