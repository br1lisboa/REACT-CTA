import { Routes, Route, Navigate } from "react-router-dom";
import {
  ComisionDirectiva,
  ComoAfiliarse,
  Contacto,
  Inicio,
  Institucional,
} from "../containers";
import { RouterLayout } from "../components";
import { ROUTE } from "../constants";

const AppRouter: React.FC<object> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path={"/"} element={<Inicio />} />
        <Route
          path={ROUTE.COMISION_DIRECTIVA}
          element={<ComisionDirectiva />}
        />
        <Route path={ROUTE.COMO_AFILIARSE} element={<ComoAfiliarse />} />
        <Route path={ROUTE.INSTITUCIONAL} element={<Institucional />} />
        <Route path={ROUTE.CONTACTO} element={<Contacto />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
