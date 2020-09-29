import React from 'react';
import Link from 'next/link';

import { StyledNav } from './navbar.styled';
import { NextRouter } from 'next/router';

function Navbar({ router }: { router: NextRouter }) {
  return (
    <StyledNav>
      <ol>
        <li {...(router.pathname == '/' && { className: 'active' })}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li {...(router.pathname == '/about' && { className: 'active' })}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ol>
    </StyledNav>
  );
}

export default Navbar;
