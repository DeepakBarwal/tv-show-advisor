import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./constants";
import TvShowDetail from "./components/TvShowDetail/TvShowDetail";
import s from "./style.module.css";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";

const App = () => {
  const [currentTvShow, setCurrentTvShow] = useState();

  const fetchPopulars = async () => {
    const poupularTvShowList = await TVShowAPI.fetchPopular();
    if (poupularTvShowList.length > 0) {
      setCurrentTvShow(poupularTvShowList[0]);
    }
  };

  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow?.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="NextWatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>Recommended TV Shows</div>
    </div>
  );
};

export default App;
