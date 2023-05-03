import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";
import { dataContact, iconsFooterL, iconsFooterR } from "./iconsFooter";

const useStyles = makeStyles(() => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "15vh",
    backgroundColor: themePallete.PRIMARY,
    color: themePallete.TEXT_COLOR,
    padding: "20px 50px 20px 50px",
    display: "flex",
  },
  footerR: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
  },
  footerL: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  svgData: {
    width: "15px",
    height: "15px",
    marginRight: "10px",
  },
  dataText: {
    display: "flex",
    alignItems: "center",
  },
  svgCTA: {
    width: "50%",
  },
}));

/* type FooterProps = {
  text: string;
}; */

const Footer: React.FC<object> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box className={classes.footerR}>
        {iconsFooterR.map((icons) => (
          <img
            key={icons.alt}
            src={
              icons.icon.confedSVG || icons.icon.strongSVG || icons.icon.tucSVG
            }
            alt={icons.alt}
          />
        ))}
      </Box>
      <Box className={classes.footerL}>
        <Box className={classes.data}>
          {dataContact.map((data) => (
            <Box className={classes.dataText}>
              <img
                className={classes.svgData}
                src={data.icon.gpsSVG || data.icon.telSVG || data.icon.emailSVG}
                alt={data.data}
              />
              <Typography>{data.data}</Typography>
            </Box>
          ))}
        </Box>
        <img
          className={classes.svgCTA}
          src={iconsFooterL.icon.ctaSVG}
          alt={iconsFooterL.alt}
        />
      </Box>
    </Box>
  );
};

export default Footer;
