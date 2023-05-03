import { AppBar, Box, Grid, makeStyles } from "@mui/material";
import { themePallete } from "../../config/theme-config";
import { NavBarHook } from ".";

import { IconsSocialNet } from "..";
import { NavLinks } from "./components";

const NavBar = () => {
  const { formatteDate } = NavBarHook();

  return (
    <AppBar position="fixed" color="transparent" sx={{ height: "15vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100vw",
          height: "50%",
          color: themePallete.TEXT_COLOR,
          paddingLeft: "7%",
          paddingRight: "7%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={10} alignSelf="center">
            {formatteDate.toUpperCase()}
          </Grid>
          <Grid item xs={2}>
            <IconsSocialNet />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100vw",
          height: "50%",
          color: themePallete.TEXT_COLOR,
          paddingLeft: themePallete.PADDING_LEFT,
          paddingRight: themePallete.PADDING_RIGHT,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLinks />
      </Box>
    </AppBar>
  );
};
export default NavBar;
