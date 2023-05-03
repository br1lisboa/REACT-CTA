import { Box } from "@mui/material";
import { IconsNavBar } from "..";
import { NavLink } from "react-router-dom";

const IconsSocialNet: React.FC<object> = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "20%",
          paddingTop: "3%",
        }}
      >
        {IconsNavBar.map((icon) => (
          <NavLink to={icon.link} key={icon.alt} target={icon.link}>
            <img
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
