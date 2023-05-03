import { NavLink } from "react-router-dom";
import { LinksNavBar } from "..";
import { Link } from "@mui/material";

import styles from "../styles.module.css";

const NavLinks: React.FC<object> = () => {
  return (
    <>
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
    </>
  );
};
export default NavLinks;
