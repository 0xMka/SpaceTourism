import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const [burger_class, setBurgerClass] = useState(`${s.burger} ${s.visible}`);
  const [menu_class, setMenuClass] = useState(`${s.menu} ${s.hidden}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(`${s.burger} ${s.hidden}`);
      setMenuClass(`${s.menu} ${s.visible}`);
    } else {
      setBurgerClass(`${s.burger} ${s.visible}`);
      setMenuClass(`${s.menu} ${s.hidden}`);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <div onClick={updateMenu} className={burger_class}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>

      <div className={s.line_style}></div>

      <div className={menu_class}>
        <svg
          onClick={updateMenu}
          className={s.close}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>

        <nav className={s.liste_title}>
          <div onClick={() => navigate("/")} className={s.main}>
            <b className={s.number_main}>00</b> HOME
          </div>

          <div onClick={() => navigate("/destination")} className={s.main}>
            <b className={s.number_main}>01</b> DESTINATION
          </div>

          <div onClick={() => navigate("/crew")} className={s.main}>
            <b className={s.number_main}>02</b> CREW
          </div>

          <div onClick={() => navigate("/technology")} className={s.main}>
            <b className={s.number_main}>03</b> TECHNOLOGY
          </div>
        </nav>
      </div>
    </div>
  );
};
