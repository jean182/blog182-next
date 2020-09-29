import { createGlobalStyle } from 'styled-components';
import { nprogressStyles } from './nprogress';
import { colors } from 'theme/colors';
import { cssVar } from 'theme/colors/utils';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  html {
    ${colors.variables.body}: ${colors.light.body};
    ${colors.variables.error}: ${colors.light.error};
    ${colors.variables.info}: ${colors.light.info};
    ${colors.variables.primary}: ${colors.light.primary};
    ${colors.variables.secondary}: ${colors.light.secondary};
    ${colors.variables.text}: ${colors.light.text};
    ${colors.variables.warning}: ${colors.light.warning};
    ${colors.variables.sunOrMoon}: ${colors.light.sunOrMoon};
  }

  html.dark {
    ${colors.variables.body}: ${colors.dark.body};
    ${colors.variables.error}: ${colors.dark.error};
    ${colors.variables.info}: ${colors.dark.info};
    ${colors.variables.primary}: ${colors.dark.primary};
    ${colors.variables.secondary}: ${colors.dark.secondary};
    ${colors.variables.text}: ${colors.dark.text};
    ${colors.variables.warning}: ${colors.dark.warning};
    ${colors.variables.sunOrMoon}: ${colors.dark.sunOrMoon};
  }

  body {
    background: ${cssVar(colors.variables.body)};
    color: var(${colors.variables.text});
    font-family: 'Roboto', sans-serif;
    transition: background 0.5s ease;
  }

  ${nprogressStyles}
`;

export default GlobalStyle;
