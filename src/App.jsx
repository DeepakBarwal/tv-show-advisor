import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./constants";
import TvShowDetail from "./components/TvShowDetail/TvShowDetail";
import s from "./style.module.css";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import TvShowList from "./components/TvShowList/TvShowList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopulars = async () => {
    try {
      const poupularTvShowList = await TVShowAPI.fetchPopular();
      if (poupularTvShowList.length > 0) {
        setCurrentTvShow(poupularTvShowList[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRecommendations = async (tvShowId) => {
    try {
      const recommendedListResp = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendedListResp.length > 0) {
        setRecommendationList(recommendedListResp.slice(0, 10));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTvShow?.id) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  const updateCurrentTvShow = (tvShow) => {
    setCurrentTvShow(tvShow);
  };

  const fetchByTitle = async (title) => {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTvShow(searchResponse[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && (
          <>
            {currentTvShow && (
              <TvShowList
                tvShowList={recommendationList}
                onClickItem={updateCurrentTvShow}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
