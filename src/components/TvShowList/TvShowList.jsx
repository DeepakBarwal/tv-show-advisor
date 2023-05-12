import s from "./style.module.css";
import TvShowListItem from "../TvShowListItem/TvShowListItem";

const TvShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TvShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TvShowList;
