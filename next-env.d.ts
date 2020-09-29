/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
  __theme: string;
  __onThemeChange: () => void;
  __setPreferredTheme: (theme: string) => void;
}
