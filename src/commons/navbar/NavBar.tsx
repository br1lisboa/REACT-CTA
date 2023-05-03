import { AppBar, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";
import { NavBarHook } from ".";

import { IconsSocialNet } from "..";
import { NavLinks } from "./components";

const useStyles = makeStyles(() => ({
  navBarTop: {
    backgroundColor: themePallete.PRIMARY,
    width: "100%",
    height: "50%",
    color: themePallete.TEXT_COLOR,
    paddingLeft: "7%",
    paddingRight: "7%",
    display: "flex",
    alignItems: "center",
  },
  navBarBottom: {
    backgroundColor: themePallete.SECONDARY,
    width: "100%",
    height: "50%",
    color: themePallete.TEXT_COLOR,
    paddingLeft: "20%",
    paddingRight: "20%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const NavBar: React.FC<object> = () => {
  const classes = useStyles();
  const { formatteDate } = NavBarHook();

  return (
    <AppBar position="fixed" color="transparent" sx={{ height: "15vh" }}>
      <Box className={classes.navBarTop}>
        <Grid container>
          <Grid item xs={10} alignSelf="center">
            {formatteDate.toUpperCase()}
          </Grid>
          <Grid item xs={2}>
            <IconsSocialNet />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.navBarBottom}>
        <NavLinks />
      </Box>
    </AppBar>
  );
};
export default NavBar;
