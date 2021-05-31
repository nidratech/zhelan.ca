import { DefaultTheme } from 'styled-components';

export const COLOR_BRAND = '#d5851d';
export const COLOR_WHITE = '#ffffff';
export const COLOR_GREY_LIGHT = '#CFD2D3';
export const COLOR_GREY = '#A0ADB9';
export const COLOR_BACKGROUND_GREY = '#363636';

const theme: DefaultTheme = {
  color: {
    brand: COLOR_BRAND,
    white: COLOR_WHITE,
    greyLight: COLOR_GREY_LIGHT,
    grey: COLOR_GREY,
    background: COLOR_BACKGROUND_GREY,
  },
  space: {
    navBarHeight: '5rem',
    tiny: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    mediumLarge: '1.5rem',
    large: '2rem',
  },
  breakpoint: {
    mobile: '48rem',
  },
  borderRadius: '0.5rem',
};

export default theme;
