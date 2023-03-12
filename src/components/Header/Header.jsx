import s from "./style.module.css";
import logo from "../../assets/shared/logo.svg";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <div className={s.container}>
      <Logo logo={logo} />
      <NavBar />
    </div>
  );
};
