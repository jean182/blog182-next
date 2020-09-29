import { useTheme } from 'helpers/hooks';
import { isBrowser } from 'helpers/utils';
import React from 'react';
import { IconWrapper, MoonMask, MoonOrSun } from './switch.styled';

function Switch() {
  const [theme] = useTheme();
  const isDark = theme === `dark`;
  function toggleColorMode() {
    if (isBrowser()) {
      window.__setPreferredTheme(isDark ? 'light' : 'dark');
    }
  }

  return (
    <IconWrapper
      onClick={toggleColorMode}
      aria-label={isDark ? `Activate light mode` : `Activate dark mode`}
      title={isDark ? `Activate light mode` : `Activate dark mode`}>
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
}

export default Switch;
