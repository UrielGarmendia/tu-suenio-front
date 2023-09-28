import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/actions";

const TableUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers);
    console.log(users);

    useEffect(() => {
        dispatch(getUsers());
    }, [users]);

    return (
        <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Dni</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Estado</th>
            <th>EsAdmin</th>
            <th>Banear</th>
            <th>Dar permisos</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dni}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.isDisable ? "Inactivo" : "Activo"}</td> 
              <td>{user.isAdmin ? "Si" : "No"}</td>
              <td>
                <button>
                    Boton a usar
                </button>
              </td>
              <td>
                <button>
                    Boton a usar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default TableUsers;