export type IGlobalTheme = boolean;

export type IGlobalThemeContext = [
  IGlobalTheme,
  (change: IGlobalTheme | ((theme: IGlobalTheme) => IGlobalTheme)) => void
];
