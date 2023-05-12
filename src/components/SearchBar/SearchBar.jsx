import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        className={s.input}
        type="text"
        placeholder="Search a TV show you may like"
      />
    </>
  );
};

export default SearchBar;
