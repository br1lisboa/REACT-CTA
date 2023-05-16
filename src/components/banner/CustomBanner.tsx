import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  banner: {
    width: "100%",
  },
}));

type Props = {
  svg: string;
  alt: string;
};
const CustomBanner: React.FC<Props> = ({ svg, alt }) => {
  const classes = useStyles();
  return (
    <Box>
      <img className={classes.banner} src={svg} alt={alt} />
    </Box>
  );
};

export default CustomBanner;
