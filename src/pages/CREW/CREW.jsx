import { useContext, useRef, useState } from "react";
import { TitlePages } from "../../components/TitlePages/TitlePages";
import { CrewDataContext, DATA } from "../../contexts/CrewDataContext";
import s from "./style.module.css";

export const CREW = () => {
  const initialData = useContext(CrewDataContext);
  const [data, setData] = useState(initialData);
  const [swipeCount, setSwipeCount] = useState(1);
  const ref = useRef(null);
  let touchStartX = 0;

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const touch = e.changedTouches[0];
    const distance = touch.clientX - touchStartX;
    const dataMap = {
      1: "douglas",
      2: "mark",
      3: "victor",
      4: "anousheh",
    };
    const swipeDirection = distance > 0 ? -1 : 1;
    let newSwipe = swipeCount + swipeDirection;
    if (newSwipe < 1) {
      newSwipe = 4;
    } else if (newSwipe > 4) {
      newSwipe = 1;
    }
    setSwipeCount(newSwipe);
    setData(dataMap[newSwipe]);
  }

  return (
    <CrewDataContext.Provider value={(data, setData)}>
      <div className={`${s.background_image}`}>
        <TitlePages pageNumber={DATA.page.number} title={DATA.page.title} />
        <div
          ref={ref}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={s.wrapper}
        >
          <div className={s.image}>
            <img
              className={s.image_item}
              src={DATA[data].img}
              alt={DATA[data].name}
            />
          </div>

          <div className={s.content}>
            <div className={s.pagination}>
              <div
                onClick={() => setData("douglas")}
                className={
                  data === "douglas"
                    ? s.pagination_itemSelected
                    : s.pagination_item
                }
              ></div>
              <div
                onClick={() => setData("mark")}
                className={
                  data === "mark"
                    ? s.pagination_itemSelected
                    : s.pagination_item
                }
              ></div>
              <div
                onClick={() => setData("victor")}
                className={
                  data === "victor"
                    ? s.pagination_itemSelected
                    : s.pagination_item
                }
              ></div>
              <div
                onClick={() => setData("anousheh")}
                className={
                  data === "anousheh"
                    ? s.pagination_itemSelected
                    : s.pagination_item
                }
              ></div>
            </div>
            <div className={s.article}>
              <h1 className={s.article_title}>{DATA[data].job}</h1>
              <h1 className={s.article_subtitle}>{DATA[data].name}</h1>
              <span className={s.article_text}>{DATA[data].description}</span>
            </div>
          </div>
        </div>
      </div>
    </CrewDataContext.Provider>
  );
};
