import { Typography } from "@mui/material";

interface Props {
  sede?: string;
  dir?: string;
  tel?: string;
  mail?: string;
}

const InfoContact: React.FC<Props> = ({ sede, dir, tel, mail }) => {
  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: "700" }}>
        {sede}
      </Typography>
      <Typography variant="body1">{dir}</Typography>
      <Typography variant="body1">{tel}</Typography>
      <Typography variant="body1">{mail}</Typography>
    </>
  );
};

export default InfoContact;
