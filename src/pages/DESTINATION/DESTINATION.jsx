import { useContext, useState } from "react";
import { TitlePages } from "../../components/TitlePages/TitlePages";
import {
  DestinationDataContext,
  DATA,
} from "../../contexts/DestinationDataContext";
import s from "./style.module.css";

export const DESTINATION = () => {
  const initialData = useContext(DestinationDataContext);
  const [data, setData] = useState(initialData);

  return (
    <DestinationDataContext.Provider value={(data, setData)}>
      <div className={`${s.background_image}`}>
        <TitlePages pageNumber={DATA.page.number} title={DATA.page.title} />

        <div className={s.wrapper}>
          <div className={s.image}>
            <img className={s.image_item} src={DATA[data].img} alt="" />
          </div>
          <div className={s.content}>
            <div className={s.pagination}>
              <div
                onClick={() => setData("moon")}
                className={s.pagination_item}
                style={{
                  borderBottom: data === "moon" ? "2px solid #ffffff" : "none",
                }}
              >
                {DATA.moon.name}
              </div>
              <div
                onClick={() => setData("mars")}
                className={s.pagination_item}
                style={{
                  borderBottom: data === "mars" ? "2px solid #ffffff" : "none",
                }}
              >
                {DATA.mars.name}
              </div>
              <div
                onClick={() => setData("europa")}
                className={s.pagination_item}
                style={{
                  borderBottom:
                    data === "europa" ? "2px solid #ffffff" : "none",
                }}
              >
                {DATA.europa.name}
              </div>
              <div
                onClick={() => setData("titan")}
                className={s.pagination_item}
                style={{
                  borderBottom: data === "titan" ? "2px solid #ffffff" : "none",
                }}
              >
                {DATA.titan.name}
              </div>
            </div>
            <div className={s.article}>
              <h1 className={s.article_title}>{DATA[data].name}</h1>
              <p className={s.article_text}>{DATA[data].text}</p>
            </div>
            <div className={s.detail}>
              <div className={s.detail_column}>
                <span className={s.detail_item}>AVG. DISTANCE</span>
                <h2 className={s.detail_itemData}>{DATA[data].distance}</h2>
              </div>
              <div className={s.detail_column}>
                <span className={s.detail_item}>Est. travel time</span>
                <h2 className={s.detail_itemData}>{DATA[data].travelTime}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DestinationDataContext.Provider>
  );
};
