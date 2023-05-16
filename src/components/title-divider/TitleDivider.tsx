import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themePallete } from "../../config/theme-config";

const useStyles = makeStyles(() => ({
  dividerTitle: {
    color: themePallete.TEXT_COLOR,
    fontSize: "14px",
    padding: "10px",
  },
}));

interface Props {
  text: string;
  subText?: string;
}

const TitleDivider: React.FC<Props> = ({ text, subText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.dividerTitle}>
      <Typography mb={2}>{text}</Typography>
      <Divider />
      <Typography mt={2}>{subText}</Typography>
    </Box>
  );
};

export default TitleDivider;
