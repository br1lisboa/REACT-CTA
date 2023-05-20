import Style from "./style.module.css";

const Loader = () => {
  return (
    <div className={Style.loader}>
      <div className={Style.loader__spinner}></div>
    </div>
  );
};

export default Loader;
