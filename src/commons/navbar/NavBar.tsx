import { AppBar, Box, Link } from "@mui/material";
import { themePallete } from "../../config/theme-config";
import { NavLink } from "react-router-dom";
import { LinksNavBar } from ".";
import styles from "./styles.module.css";

const NavBar: React.FC<object> = () => {
  return (
    <AppBar position="fixed" color="transparent" sx={{ height: "10vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100vw",
          height: "50%",
          color: themePallete.TEXT_COLOR,
          paddingLeft: "7%",
          display: "flex",
          alignItems: "center",
        }}
      >
        24 DE ABRIL 2023
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100vw",
          height: "50%",
          color: themePallete.TEXT_COLOR,
          paddingLeft: themePallete.PADDING_LEFT,
          paddingRight: themePallete.PADDING_RIGHT,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {LinksNavBar.map((link) => (
          <Link>
            <NavLink
              className={styles.link}
              key={link.text}
              to={link.link}
              target={link?.target}
            >
              {link.text}
            </NavLink>
          </Link>
        ))}
      </Box>
      <style>{`.nav-active:color:red`}</style>
    </AppBar>
  );
};
export default NavBar;
