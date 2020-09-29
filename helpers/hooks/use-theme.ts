import { consoleWarning, isBrowser } from 'helpers/utils';
import React from 'react';

export function useTheme(): [string, React.Dispatch<React.SetStateAction<string>>] {
  let windowThemeValue = '';
  if (isBrowser()) {
    windowThemeValue = window.__theme;
  }
  const [theme, setTheme] = React.useState(windowThemeValue);

  React.useEffect(() => {
    try {
      window.__onThemeChange = () => {
        setTheme(window.__theme);
      };
      const metaThemeColor = document.querySelector('meta[name=theme-color]');
      metaThemeColor.setAttribute('content', theme === 'light' ? '#e66992' : '#ffa7c4');
    } catch (error) {
      consoleWarning(error);
    }
  }, [theme]);

  return [theme, setTheme];
}
