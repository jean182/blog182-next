import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

import { HEADER_HEIGHT } from 'helpers/constants';

export const StyledHeader = styled.header`
  position: fixed;
  padding: 0.5rem 1rem;
  top: 0;
  right: 0;
  left: 0;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.cssVar(theme.colors.variables.text)};
  z-index: 2;
  -webkit-box-shadow: 0 6px 11px -6px ${({ theme }) => theme.colors.cssVar(theme.colors.variables.text)};
  -moz-box-shadow: 0 6px 11px -6px ${({ theme }) => theme.colors.cssVar(theme.colors.variables.text)};
  box-shadow: 0 6px 11px -6px ${({ theme }) => theme.colors.cssVar(theme.colors.variables.text)};

  h1 {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;

    a {
      color: ${({ theme }) => theme.colors.cssVar(theme.colors.variables.primary)};
      text-decoration: none;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
