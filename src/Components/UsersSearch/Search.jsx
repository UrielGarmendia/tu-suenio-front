import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userByName, takeAllUsersBack } from "../../Redux/actions";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from "./search.module.css";

const Users = () => {

    const [ userName, setUserName ] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        setUserName(value)
    };

    const onSearch = (value) => {
        dispatch(userByName(value))
      };

    const bringAll = () => {
        dispatch(takeAllUsersBack())
    }

    return (
        <div className={styles.cont}>
            <input className={styles.input} type="text" placeholder="Buscar usuario por nombre" value={userName} onChange={handleChange}/>
            <button className={styles.search_button} onClick={() => onSearch(userName)}><SearchOutlinedIcon/></button>
            <button className={styles.users_button} onClick={() => bringAll()}>Todos los usuarios</button>
        </div>
    )
}

export default Users;