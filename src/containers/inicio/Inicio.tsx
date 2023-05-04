import { Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";

import { CustomBanner } from "../../components";
import { bannerSVG } from "./media";
import { Cards } from ".";

const useStyles = makeStyles(() => ({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },

  text: {
    color: themePallete.TEXT_COLOR,
    fontSize: "14px",
    padding: "10px",
  },
}));

const Inicio = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <CustomBanner svg={bannerSVG.img.neriSVG} alt={bannerSVG.alt} />
      </Grid>
      <Grid item xs={12} className="padding">
        <Typography className={classes.text}>ÚLTIMAS NOTICIAS</Typography>
        <Divider />
      </Grid>
      <Grid container spacing={2} pt={3}>
        <Cards />
      </Grid>
    </Grid>
  );
};
export default Inicio;
