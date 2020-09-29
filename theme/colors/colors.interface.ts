export type ColorMappings =
  | 'body'
  | 'text'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'error'
  | 'sunOrMoon'
  | 'warning';

export type Colors = { [key in ColorMappings]: string };
