const colors = {
  niceBlack: '#001F3F',
  black: '#000000',
  white: '#ffffff',
  royalBlue: '#3333FF',
};

const spacing = {
  spacing_1: '0.125rem',
  spacing_2: '0.25rem',
  spacing_3: '0.5rem',
  spacing_4: '0.75rem',
  spacing_5: '1rem',
  spacing_6: '1.5rem',
  spacing_7: '2rem',
  spacing_8: '2.5rem',
  spacing_9: '3rem',
};

const layout = {
  layout_1: '1rem',
  layout_2: '1.5rem',
  layout_3: '2rem',
  layout_4: '3rem',
  layout_5: '4rem',
  layout_6: '5rem',
  layout_7: '10rem',
};

const fontFamilies = {
  defaultFont: '\'Roboto\', sans-serif',
};

const theme = { ...colors, ...spacing, ...layout, ...fontFamilies };

export default theme;
