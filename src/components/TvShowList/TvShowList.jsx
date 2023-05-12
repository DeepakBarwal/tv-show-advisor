import s from "./style.module.css";
import TvShowListItem from "../TvShowListItem/TvShowListItem";

const TvShowList = ({ tvShowList }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TvShowListItem
                tvShow={tvShow}
                onClick={() => console.log("todo")}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TvShowList;
