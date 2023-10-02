import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/actions";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./tableUsers.module.css";

const color = {
  rojo: "ff0000",
  verde: "#008000"
};

const TableUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers);

    useEffect(() => {
      dispatch(getUsers());
    }, []);

    const ban = async (id, isDisable) => {
      try {
        if(!isDisable) {
          await axios.delete(`http://localhost:3001/user/${id}/delete`);
          dispatch(getUsers());
        } else {
          await axios.put(`http://localhost:3001/user/${id}/restore`);
          dispatch(getUsers());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const permissions = async (id, isAdmin) => {
      try {
        if(isAdmin) {
          await axios.put(`http://localhost:3001/user/${id}/modify`, {isAdmin: false});
          dispatch(getUsers());
        }
        else {
          await axios.put(`http://localhost:3001/user/${id}/modify`, {isAdmin: true});
          dispatch(getUsers());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const banAlert = (id, isDisable) => {
      Swal.fire({
          toast: false,
          icon: "warning",
          title: !isDisable ? "Estas segura/o de banear al usuario?" : "Estas segura/o de desbanear al usuario?",
          showConfirmButton: true,
          position: "center",
      }).then(() => {
          ban(id, isDisable)
      })
  };

  const adminAlert = (id, isAdmin) => {
    Swal.fire({
        toast: false,
        icon: "warning",
        title: !isAdmin ? "Estas segura/o de dar permisos de administrador al usuario?" : "Estas segura/o de quitar permisos de administrador al usuario?",
        showConfirmButton: true,
        position: "center",
    }).then(() => {
      permissions(id, isAdmin);
    })
};

    return (
        <table className={styles.table}>
          <thead className={styles.head}>
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Dni</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Estado</th>
              <th>EsAdmin</th>
              <th>Cambiar estado</th>
              <th>Permisos</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dni}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td className={styles.center}>{user.isDisable ? "Inactivo" : "Activo"}</td> {/*true === inactivo y false = Activo*/}
                <td className={styles.center}>{user.isAdmin ? "Si" : "No"}</td>
                <td className={styles.button_cont}>
                  <button  className={styles.button_disable} onClick={() => banAlert(user.id, user.isDisable)}>
                      {user.isDisable ? "Desbanear" : "Banear"}
                  </button>
                </td>
                <td className={styles.button_cont}>
                  <button className={styles.button_admin} onClick={() => adminAlert(user.id, user.isAdmin)}>
                      {user.isAdmin ? "Quitar permisos" : "Dar permisos"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    )
}

export default TableUsers;