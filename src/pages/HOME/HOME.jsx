import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export const HOME = () => {
  const navigate = useNavigate();
  return (
    <div className={`${s.container} ${s.background_image}`}>
      <div className={s.main}>
        <h3 className={s.subtitle}>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className={s.title}>SPACE</h1>
        <p className={s.text}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div onClick={() => navigate("/destination")} className={s.btn_explore}>
        EXPLORE
      </div>
    </div>
  );
};
