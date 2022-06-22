export interface SanMarzanoThemeType {
  breakpoints: string[];
  fonts: { heading: string; body: string };
  space: string[];
  sizes: string[];
  fontSizes: string[];
  lineHeights: number[];
  fontWeights: number[];
  letterSpacings: number[];
  gradients: {
    golden: string;
  };
  radii: number[];
  mediaQueries: {};
  colors: {
    white: string;
    black: string;
    // Grays
    gray: string;
    gray050: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    // Golds
    gold: string;
    gold050: string;
    gold100: string;
    gold200: string;
    gold300: string;
    gold400: string;
    gold500: string;
    gold600: string;
    gold700: string;
    gold800: string;
    gold900: string;
    // Greens
    green: string;
    green050: string;
    green100: string;
    green200: string;
    green300: string;
    green400: string;
    green500: string;
    green600: string;
    green700: string;
    green800: string;
    green900: string;
    // Blues
    blue: string;
    blue050: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;
    // red
    red: string;
    red050: string;
    red100: string;
    red200: string;
    red300: string;
    red400: string;
    red500: string;
    red600: string;
    red700: string;
    red800: string;
    red900: string;
    // orange
    orange: string;
    orange050: string;
    orange100: string;
    orange200: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange600: string;
    orange700: string;
    orange800: string;
    orange900: string;
  };
}

const breakpoints = ["480px", "839px", "1024px"];

export const SanMarzanoTheme: SanMarzanoThemeType = {
  // Breakpoints based on material design (phone, tablet, desktop)
  breakpoints: [breakpoints[0], breakpoints[1], breakpoints[2]],
  mediaQueries: {
    phone: `@media screen and (min-width: ${breakpoints[0]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]})`,
    desktop: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  fonts: {
    body: "Source Sans Pro",
    heading: "DM Serif Display",
  },
  gradients: {
    golden:
      "linear-gradient(102.7deg, #A75709 -5.01%, #E8CE76 28.8%, #FFFFFF 43.97%, #F2DB99 57.37%, #EAA424 77.18%, #AE660F 94.55%);",
  },
  fontSizes: [],
  lineHeights: [],
  fontWeights: [300, 400, 500],
  letterSpacings: [],
  radii: [],
  space: [],
  sizes: [],
  colors: {
    white: "#ffffff",
    black: "#000000",
    gray: "#898989",
    gray100: "#EEEEEE",
    gray050: "#E1E1E1",
    gray200: "#E1E1E1",
    gray300: "#CFCFCF",
    gray400: "#AAAAAA",
    gray500: "#898989",
    gray600: "#626262",
    gray700: "#4F4F4F",
    gray800: "#313131",
    gray900: "#111111",
    // Golds
    gold: "#D3BC47",
    gold050: "#FFFCE9",
    gold100: "#FEF6C9",
    gold200: "#FEF2A6",
    gold300: "#FCED85",
    gold400: "#FFE320",
    gold500: "#D3BC47",
    gold600: "#BEA542",
    gold700: "#9C8038",
    gold800: "#7A6226",
    gold900: "#584518",
    // Greens
    green: "#32892B",
    green050: "#E4F0E4",
    green100: "#BFD9BC",
    green200: "#95C091",
    green300: "#6DA967",
    green400: "#50994A",
    green500: "#32892B",
    green600: "#297C24",
    green700: "#1F6B1A",
    green800: "#145B11",
    green900: "#003E00",
    // Blues
    blue: "#4299E1",
    blue050: "#EBF8FF",
    blue100: "#D7EDFA",
    blue200: "#BEE3F8",
    blue300: "#90CDF4",
    blue400: "#63B3ED",
    blue500: "#4299E1",
    blue600: "#3182CE",
    blue700: "#2B6CB0",
    blue800: "#2C5282",
    blue900: "#2A4365",
    // red
    red: "#F56565",
    red050: "#FFF5F5",
    red100: "#FFE2E2",
    red200: "#FFCCCC",
    red300: "#FEB2B2",
    red400: "#FC8181",
    red500: "#F56565",
    red600: "#E53E3E",
    red700: "#C53030",
    red800: "#9B2C2C",
    red900: "#742A2A",
    // orange
    orange: "#ED8936",
    orange050: "#FFFAF0",
    orange100: "#FFF5E1",
    orange200: "#FEEBC8",
    orange300: "#FBD38D",
    orange400: "#F6AD55",
    orange500: "#ED8936",
    orange600: "#DD6B20",
    orange700: "#C05621",
    orange800: "#9C4221",
    orange900: "#7B341E",
  },
};

export default SanMarzanoTheme;
