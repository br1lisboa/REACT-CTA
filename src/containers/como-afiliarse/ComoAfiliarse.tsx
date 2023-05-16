import { Button, Grid, Typography } from "@mui/material";
import { TitleDivider } from "../../components";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";

const useStyles = makeStyles(() => ({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },
}));

const ComoAfiliarse: React.FC<object> = () => {
  const classes = useStyles();

  function handleDownload() {
    window.open(
      "https://ctaa.org.ar/wp-content/uploads/2023/04/FICHA_AFILIACION_CTA-autonoma_.pdf",
      "_blank"
    );
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <TitleDivider
          text="FICHA DE AFILIACIÓN A LA CTA AUTÓNOMA"
          subText="La afiliación a la Central de Trabajadores de la Argentina se rige por el art. N° 4 del estatuto social. "
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign={"center"} mt={4} color={"#029633"}>
          ¿ QUIÉRES AFILIARTE A LA CTA AUTÓNOMA ?
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign={"center"} mt={2}>
        <Button variant="outlined" color={"secondary"} onClick={handleDownload}>
          Descargar Ficha de Afiliación
        </Button>
      </Grid>
      <Grid item mt={4}>
        <Typography variant="body1" sx={{ fontWeight: "700" }}>
          Una vez bajada y completada la ficha deberá ser remitida a:
          {
            <span style={{ color: "#029633" }}> afiliaciones@ctaa.org.ar</span>
          }{" "}
          y nos pondremos en contacto para la vinculación a la CTA Autónoma más
          cercana a tu domicilio.
        </Typography>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Typography
          textAlign={"justify"}
          variant="body1"
          color={themePallete.TEXT_COLOR}
        >
          Artículo 4: La afiliación a la CTA Autónoma es un acto voluntario y
          libre de trabajadores mayores de 14 años comprendidos en el ámbito
          subjetivo de actuación, sin más límite que la aceptación y práctica de
          los objetivos señalados en la Declaración de Principios y en el
          capítulo de los Objetivos y Fines, y el respeto por los presentes
          estatutos.
        </Typography>
        <Typography
          textAlign={"justify"}
          variant="body1"
          color={themePallete.TEXT_COLOR}
          mt={2}
        >
          La afiliación se efectivizará directamente por el trabajador ante la
          organización local, provincial regional o nacional de la CTA Autónoma
          o a través del sindicato, unión, asociación o federación de cualquier
          tipo, afiliada a la CTA Autónoma. La afiliación de una entidad
          sindical de ámbito territorial nacional o provincial deberá ser
          aceptada por la Comisión Ejecutiva Nacional.
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign={"end"} mt={4}>
        <Button variant="contained" color="secondary">{`Contactanos >`}</Button>
      </Grid>
    </Grid>
  );
};
export default ComoAfiliarse;
