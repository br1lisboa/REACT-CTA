import { ThemeProvider, createTheme } from "@mui/material";
import { ThemeProp } from ".";

enum themePallete {
  BG = "FFF",
  PRIMARY = "FFF",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: themePallete.BG },
    primary: { main: themePallete.PRIMARY },
  },
});

const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfig;
