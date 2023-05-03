import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../../commons";

const RouterLayout: React.FC<object> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default RouterLayout;
