import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const NavBarHook = () => {
  const [date, setDate] = React.useState(new Date());
  const formatteDate = format(date, "d 'de' MMM 'del' yyyy", { locale: es });

  React.useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);
  return {
    formatteDate,
  };
};
export default NavBarHook;
