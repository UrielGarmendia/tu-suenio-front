import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/actions";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./tableUsers.module.css";

import Search from "../UsersSearch/Search"


const TableUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);

  const allUsers = users.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  const ban = async (id, isDisable) => {
    try {
      if (!isDisable) {
        await axios.delete(
          `https://tu-suenio-back.onrender.com/user/${id}/delete`
        );
        dispatch(getUsers());
      } else {
        await axios.put(
          `https://tu-suenio-back.onrender.com/user/${id}/restore`
        );
        dispatch(getUsers());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const permissions = async (id, isAdmin) => {
    try {
      if (isAdmin) {
        await axios.put(
          `https://tu-suenio-back.onrender.com/user/${id}/modify`,
          {
            isAdmin: false,
          }
        );
        dispatch(getUsers());
      } else {
        await axios.put(
          `https://tu-suenio-back.onrender.com/user/${id}/modify`,
          {
            isAdmin: true,
          }
        );
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
          showCancelButton: true,
          position: "center",
      }).then((result) => {
        if (result.isConfirmed) {
          ban(id, isDisable);
        }
      })

  };

  const adminAlert = (id, isAdmin) => {
    Swal.fire({

        toast: false,
        icon: "warning",
        title: !isAdmin ? "Estas segura/o de dar permisos de administrador al usuario?" : "Estas segura/o de quitar permisos de administrador al usuario?",
        showConfirmButton: true,
        showCancelButton: true,
        position: "center",
    }).then((result) => {
      if (result.isConfirmed) {
        permissions(id, isAdmin);
      }
    })
  };
  
  
  return (
    <div>
      <Search/>
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
          {allUsers?.map((user) => (
            <tr key={user.id}>
              <td>{`${user.name} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.dni}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td className={styles.center}>{user.isDisable ? "Inactivo" : "Activo"}</td>
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
    </div>
  )
}

export default TableUsers;