import { Colors } from './colors.interface';
import { darkColors, lightColors } from './palette';
import { variables } from './variables';
import { Variables } from './variables.interface';
import { cssVar } from './utils';

export interface ColorInterface {
  variables: Variables;
  light: Colors;
  dark: Colors;
  cssVar: (color: string) => string;
}

export const colors = {
  cssVar,
  variables,
  dark: darkColors,
  light: lightColors
};
