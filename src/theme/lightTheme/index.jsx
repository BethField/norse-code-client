import { createTheme } from "@mui/material/styles";

/*
blue:
  dark: #0369A1
  base: #0EA5E9
  light: #38BDF8

orange:
  dark: #F97316
  base: #FB923C
  lighter: #FDBA74
  yellow: #FACC15

*/

const font = "'Mali', cursive"

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FB923C',
      dark: '#F97316',
      light: '#FACC15'
    },
    secondary: {
      main: '#FB923C',
    },
    background: {
      default: '#0971BD',
      paper: '#e0f2fe',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.54)',
    }
  },
  typography: {
    fontFamily: font,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
  }
});

export default lightTheme;
