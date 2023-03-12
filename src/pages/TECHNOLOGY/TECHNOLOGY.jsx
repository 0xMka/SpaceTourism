import s from "./style.module.css";
import { useContext, useState } from "react";
import {
  DATA,
  TechnologyDataContext,
} from "../../contexts/TechnologyDataContext";
import { TitlePages } from "../../components/TitlePages/TitlePages";

export const TECHNOLOGY = () => {
  const initialData = useContext(TechnologyDataContext);
  const [data, setData] = useState(initialData);

  return (
    <TechnologyDataContext.Provider value={{ data, setData }}>
      <div className={`${s.background_image}`}>
        <TitlePages pageNumber={DATA.page.number} title={DATA.page.title} />
        <div className={s.wrapper}>
          <div className={s.content}>
            <img
              className={s.image_mobile}
              src={DATA[data].imgMobile}
              alt={DATA[data].title}
            />
            <img
              className={s.image_desktop}
              src={DATA[data].imgDesktop}
              alt={DATA[data].title}
            />
          </div>

          <div className={s.main}>
            <div className={s.page_number}>
              <div
                onClick={() => setData("launch")}
                className={data === "launch" ? s.numberSelected : s.number}
              >
                1
              </div>
              <div
                onClick={() => setData("spaceport")}
                className={data === "spaceport" ? s.numberSelected : s.number}
              >
                2
              </div>
              <div
                onClick={() => setData("spaceCapsule")}
                className={
                  data === "spaceCapsule" ? s.numberSelected : s.number
                }
              >
                3
              </div>
            </div>
            <div className={s.article}>
              <h3 className={s.article_title}>THE TERMINOLOGY…</h3>
              <h1 className={s.article_subtitle}>{DATA[data].title}</h1>
              <p className={s.article_text}>{DATA[data].text}</p>
            </div>
          </div>
        </div>
      </div>
    </TechnologyDataContext.Provider>
  );
};
