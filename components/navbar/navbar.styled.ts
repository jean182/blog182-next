import styled from 'styled-components';

export const StyledNav = styled.nav`
  ol {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  a {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.colors.dark.text};
    text-decoration: none;
  }

  li.active {
    a {
      color: ${({ theme }) => theme.colors.cssVar(theme.colors.variables.primary)};
    }
  }
`;
