import { Outlet } from "react-router-dom";
import { NavBar } from "../../commons";

const RouterLayout: React.FC<object> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default RouterLayout;
