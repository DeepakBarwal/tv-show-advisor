import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../constants.js";

const MAX_TITLE_CHAR = 20;

const TvShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default TvShowListItem;
