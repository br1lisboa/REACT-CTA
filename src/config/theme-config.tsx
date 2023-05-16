import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ThemeProp } from ".";

export enum themePallete {
  BG = "#FCF9F9",
  PRIMARY = "#232323",
  SECONDARY = "#D9D9D9",
  TEXT_COLOR = "#787C7A",
  FONT_GLOBAL = "PT Sans",
  PADDING_LEFT = "20%",
  PADDING_RIGHT = "20%",
  PADDING_CONTAINER = "11vh 11% 0.5% 11%",
  BTN_COLOR = "#029633",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: themePallete.BG },
    primary: { main: themePallete.PRIMARY, light: themePallete.SECONDARY },
    secondary: { main: themePallete.BTN_COLOR },
  },
  typography: {
    fontFamily: themePallete.FONT_GLOBAL,
    fontSize: 14,
  },
  components: {
    MuiLink: {
      defaultProps: {
        textTransform: "none",
        underline: "none",
        color: themePallete.TEXT_COLOR,
      },
    },
  },
});

const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
