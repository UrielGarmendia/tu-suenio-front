import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { byName } from "../../Redux/actions";
import styles from "./searchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState();

  function changeHandler(event) {
    event.preventDefault();
    let input = event.target.value;

    setName(input);
  }

  function onSearch(name) {
    dispatch(byName(name));
    navigate("/alcancias");
    setName("");
  }

  return (
    <div className={styles.cont}>
      <input
        className={styles.input}
        type="search"
        value={name}
        onChange={changeHandler}
        placeholder="Busca por nombre"
      />
      <button className={styles.button} onClick={() => onSearch(name)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
