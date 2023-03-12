import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export const Logo = ({ logo }) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => navigate("/")}
        className={s.logo}
        src={logo}
        alt="logo"
      />
    </>
  );
};
