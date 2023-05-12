import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value.trim());
      setValue("");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        className={s.input}
        type="text"
        placeholder="Search a TV show you may like"
        onChange={handleChange}
        onKeyUp={submit}
        value={value}
      />
    </>
  );
};

export default SearchBar;
