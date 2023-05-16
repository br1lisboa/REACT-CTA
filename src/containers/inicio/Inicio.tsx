import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";

import { CustomBanner, TitleDivider } from "../../components";
import { bannerSVG } from "./media";
import { Cards } from ".";

const useStyles = makeStyles(() => ({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },
}));

const Inicio = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <CustomBanner svg={bannerSVG.img.neriSVG} alt={bannerSVG.alt} />
      </Grid>
      <Grid item xs={12}>
        <TitleDivider text={"ÚLTIMAS NOTICIAS"} />
      </Grid>
      <Grid container spacing={2} pt={3}>
        <Cards />
      </Grid>
    </Grid>
  );
};
export default Inicio;
