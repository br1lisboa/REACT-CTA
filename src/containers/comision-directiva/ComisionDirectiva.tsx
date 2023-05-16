import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { TitleDivider } from "../../components";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";
import { itemsDirection } from "./mocks/cards-comision";

const useStyles = makeStyles(() => ({
  container: {
    padding: themePallete.PADDING_CONTAINER,
  },
}));
const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function createData(name: string, cargo: string, organizacion: string) {
  return { name, cargo, organizacion };
}

const rows = [
  createData("NERI SALAZAR", "SECRETARIO GENERAL", "Ministerio de Cultura"),
  createData("NERI SALAZAR", "SECRETARIO GENERAL", "Ministerio de Cultura"),
  createData("NERI SALAZAR", "SECRETARIO GENERAL", "Ministerio de Cultura"),
];

const ComisionDirectiva: React.FC<object> = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <TitleDivider text="COMISIÓN DIRECTIVA" />
        </Grid>
        <Grid item xs={12}>
          <Typography align="justify">
            Somos una central de trabajadores y trabajadoras, no una
            confederación de organizaciones sindicales. Propiciamos la
            afiliación directa de cada trabajador a esta experiencia colectiva
            de nuevo tipo. Ello implica que no es necesario que el trabajador
            esté afiliado a un gremio para ser CTA.
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {itemsDirection.map((item) => (
            <Grid mt={4} item xs={4} gap={"2"} key={item.id}>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={style}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <div>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    textAlign={"justify"}
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                  >
                    {item.descripcion}
                  </Typography>
                </Box>
              </Modal>
              <Card onClick={() => handleOpen()}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={"300px"}
                    image={item.img}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} mt={4}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ backgroundColor: "#D9D9D9" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ backgroundColor: "#F3F3F3" }}
                    >
                      {row.cargo}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ backgroundColor: "#F3F3F3" }}
                    >
                      {row.organizacion}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
export default ComisionDirectiva;
