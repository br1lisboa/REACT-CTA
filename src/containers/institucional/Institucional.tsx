import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";
import { Grid, Typography } from "@mui/material";
import { CustomBanner, TitleDivider } from "../../components";
import { bannerSVG } from "./media";

const useStyles = makeStyles({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },
});
const Institucional = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <CustomBanner
          svg={bannerSVG.img.institucionalSVG}
          alt={bannerSVG.alt}
        />
      </Grid>
      <Grid item xs={12}>
        <TitleDivider text={"QUIENES SOMOS - INSTITUCIONAL"} />
      </Grid>
      <Grid item xs={12}>
        <Typography p={2} align={"justify"}>
          Somos una central de trabajadores y trabajadoras, no una confederación
          de organizaciones sindicales. Propiciamos la afiliación directa de
          cada trabajador a esta experiencia colectiva de nuevo tipo. Ello
          implica que no es necesario que el trabajador esté afiliado a un
          gremio para ser CTA. Prevalece su identidad de clase como sujeto
          social sin importar su condición de empleo. Es decir si está o no
          registrado, si pertenece al pequeño universo del trabajo formal, o al
          océano de indignidad donde la mayoría sobrevive a duras penas a las
          diferentes clases de fraude con que las patronales arropan de luto el
          trabajo a destajo. Se calcula que aproximadamente el 53 por ciento de
          la fuerza del trabajo está en negro en nuestro país bajo formas
          variopintas de precariedad y flexibilización laboral. Somos la
          expresión de ese emergente social. A la exclusión con que los condena
          el sistema no le vamos a sumar mayor marginalidad y ninguneo. No dejan
          de ser trabajadores porque no perciban un recibo de sueldo en blanco.
          Por eso, también, somos un nuevo modelo sindical que no tiene nada que
          ver con el otro, del que nos fuimos hace más de 25 años para crear
          algo distinto. Cero sindicalismo empresarial. En medio de esta plaga,
          que combina altas dosis de informalidad laboral con la falta de
          libertad y democracia sindical, venimos a dar cuenta de esa realidad
          heredada del neoliberalismo para transformarla e impedir que se
          perpetúe la superexplotación capitalista neocolonial.
          <Typography mt={2}>
            Somos herederos de los anarquistas, socialistas y comunistas que
            llegaron del otro lado del mar para formatear, junto al sindicalismo
            revolucionario primero, y a los “cabecitas negras” que rebautizaron
            la Plaza de Mayo el 17 de octubre después, la matriz del movimiento
            obrero contemporáneo.
          </Typography>
          <Typography mt={2} sx={{ fontWeight: "bold" }}>
            Somos pueblo, somos trabajadores, somos CTA. Eso somos, parte de la
            historia que construye el futuro.
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Institucional;
