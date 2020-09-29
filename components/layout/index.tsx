import Header from 'components/header';

import React from 'react';

import { Props } from './layout.interfaces';
import { Main } from './layout.styled';

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
