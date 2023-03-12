import s from "./style.module.css";

export const TitlePages = ({ pageNumber, title }) => {
  return (
    <>
      <h2 className={s.page_title}>
        <b className={s.page_titleNumber}>{pageNumber}</b> {title}
      </h2>
    </>
  );
};
