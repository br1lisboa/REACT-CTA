import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";

import neriSVG from "../../assets/images/banner-inicio.svg";
import noticiaSVG from "../../assets/images/noticiasInicio.svg";
import { Footer } from "../../commons";

const useStyles = makeStyles(() => ({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },
  banner: {
    width: "100%",
  },
  text: {
    color: themePallete.TEXT_COLOR,
    fontSize: "14px",
    padding: "10px",
  },
  notic: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px",
  },
}));

const bannerSVG = { img: { neriSVG }, alt: "Neri" };
const noticiasInicio = [
  {
    img: { noticiaSVG },
    title: `En el marco del Plan de Lucha,
  la CTA se movilizará el 1° de Mayo.`,
    text: `Así se resolvió en el día de hoy en la reunión de la Comisión Ejecutiva Nacional en coordinación con otras organizaciones del campo popular.`,
    alt: "Así se resolvió en el día de hoy en la reunión de la Comisión Ejecutiva Nacional en coordinación con otras organizaciones del campo popular.",
  },
  {
    img: { noticiaSVG },
    title: `En el marco del Plan de Lucha,
  la CTA se movilizará el 1° de Mayo.`,
    text: `Así se resolvió en el día de hoy en la reunión de la Comisión Ejecutiva Nacional en coordinación con otras organizaciones del campo popular.`,
    alt: "Así se resolvió en el día de hoy en la reunión de la Comisión Ejecutiva Nacional en coordinación con otras organizaciones del campo popular.",
  },
  {
    img: { noticiaSVG },
    title: `En el marco del Plan de Lucha,
  la CTA se movilizará el 1° de Mayo.`,
    text: `Así se resolvió en el día de hoy en la reunión de la Comisión Ejecutiva Nacional en coordinación con otras organizaciones del campo popular.`,
    alt: "Así se resolvió en el día de hoy en la reunión de la Comisión Ejecutiva Nacional en coordinación con otras organizaciones del campo popular.",
  },
];

const Inicio = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Box>
          <img
            className={classes.banner}
            src={bannerSVG.img.neriSVG}
            alt={bannerSVG.alt}
          />
        </Box>
      </Grid>
      <Grid item xs={12} className="padding">
        <Typography className={classes.text}>ÚLTIMAS NOTICIAS</Typography>
        <Divider />
      </Grid>
      <Grid container spacing={2} pt={3}>
        {noticiasInicio.map((noticia) => (
          <Grid item xs={4} key={noticia.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={noticia.img.noticiaSVG}
                  alt={noticia.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {noticia.title}
                  </Typography>
                  <Typography variant="body2">{noticia.text}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Inicio;
