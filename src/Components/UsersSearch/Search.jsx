import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userByName, takeAllUsersBack } from "../../Redux/actions";

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
        <div>
            <input type="text" placeholder="Buscar usuario" value={userName} onChange={handleChange}/>
            <button onClick={() => onSearch(userName)}>Buscar</button>
            <button onClick={() => bringAll()}>Todos los usuarios</button>
        </div>
    )
}

export default Users;