import { createTheme } from "@mui/material/styles";

const font = "'Mali', cursive"

const darkTheme = createTheme({
  palette: {
    blueButton: {
      main: '#66ACEA' ,
      dark: '#2F73C1',
      contrastText: 'black'
    },
    lightBlueButton: {
      main: '#E3F2FF',
      dark: '#8196A8',
      contrastText: 'black'
    },
    nav: {
        main: '#0E1C26',
        contrastText: 'rgba(255,255,255,0.87)',
    },
    primary: {
      main: '#0E1C26',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#66ACEA',
    },
    background: {
      default: '#2C373F',
      paper: '#212A31',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      // secondary: 'rgba(255,255,255,0.54)',
      secondary: 'black',
      hint: 'rgba(255,255,255,0.38)',
    }
  },
  typography: {
    fontFamily: font,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
  }
})

// dc2626

export default darkTheme;