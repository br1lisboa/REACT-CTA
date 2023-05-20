import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";
import { TitleDivider } from "../../components";
import InfoContact from "../../components/info-contact/InfoContact";

const useStyles = makeStyles(() => ({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },
  text: {
    color: themePallete.TEXT_COLOR,
  },
}));

const Contacto: React.FC<object> = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <TitleDivider text="INFORMACIÓN DE CONTACTO" />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Grid item xs={12} className={classes.text} mt={4} ml={8}>
            <InfoContact
              sede="Sede Resistencia"
              dir="Entre Ríos 357 | Resistencia | Rep Argentina"
              tel="+54 362 476-8520"
              mail="ctaachaco@gmail.com"
            />
          </Grid>
          <Grid item xs={12} mt={4} ml={2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28321.803986685693!2d-59.00749231227868!3d-27.462238245150388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450d71280d3c65%3A0x3de6e3e5a2f7d1a1!2sCTA%20Aut%C3%B3noma%20Chaco!5e0!3m2!1ses-419!2sar!4v1684235734666!5m2!1ses-419!2sar"
              width="450"
              height="400"
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={4} ml={8}>
          <Grid item xs={12} className={classes.text}>
            <InfoContact
              sede="Sede Buenos Aires"
              dir="Bartolomé Mitre 748   |   CABA   |   Rep Argentina  "
              tel="+54 11-7092-4840"
              mail="info@ctaa.org.ar"
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Nombre"
              // value={nombre}
              // onChange={(event) => setNombre(event.target.value)}
              fullWidth
              margin="normal"
            ></TextField>
            <TextField
              label="Apellido"
              // value={nombre}
              // onChange={(event) => setNombre(event.target.value)}
              fullWidth
              margin="normal"
            ></TextField>
            <TextField
              label="Telefono"
              // value={nombre}
              // onChange={(event) => setNombre(event.target.value)}
              fullWidth
              margin="normal"
            ></TextField>
            <TextField
              label="E-mail"
              // value={nombre}
              // onChange={(event) => setNombre(event.target.value)}
              fullWidth
              margin="normal"
            ></TextField>
            <Grid item xs={12} textAlign={"end"} mt={2}>
              <Button variant="outlined" color={"secondary"}>
                ENVIAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Contacto;
