import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { noticiasInicio } from "../../media";

noticiasInicio;

const Cards = () => {
  return (
    <>
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
    </>
  );
};

export default Cards;
