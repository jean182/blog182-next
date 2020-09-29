import { Breakpoints } from './breakpoints/breakpoints.interfaces';
import { ColorInterface } from './colors';

export interface Theme {
  breakpoints: Breakpoints;
  colors: ColorInterface;
}
