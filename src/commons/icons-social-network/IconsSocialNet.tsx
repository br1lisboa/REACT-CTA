import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconsNavBar } from "..";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    width: "90%",
  },
  icons: {
    marginLeft: "15px",
    marginTop: "7px",
    width: "25px",
    height: "25px",
  },
}));

const IconsSocialNet: React.FC<object> = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        {IconsNavBar.map((icon) => (
          <NavLink to={icon.link} key={icon.alt} target={icon.link}>
            <img
              className={classes.icons}
              src={icon.icon.faceSVG || icon.icon.igSVG || icon.icon.ytbSVG}
              alt={icon.alt}
            />
          </NavLink>
        ))}
      </Box>
    </>
  );
};
export default IconsSocialNet;
