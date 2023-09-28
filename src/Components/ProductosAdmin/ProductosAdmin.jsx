import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAlcancias, deleteProduct } from "../../Redux/actions";
import {Delete, Update} from "@mui/icons-material";
import styles from "./ProductosAdmin.module.css";
import Paginado from "../Paginado/Paginado";
import Swal from "sweetalert2";

const ProductosAdmin = () => {
  const dispatch = useDispatch();
  const alcancias= useSelector((state) => state.AllAlcancias)
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
  }, [alcancias]);

  useEffect(() => {
    dispatch(allAlcancias())
  }, [deleteProduct]);

  const showAlert = (id) => {
    Swal.fire({
        title: '¿Estas seguro de eliminar este producto?',
        text: "Una vez realizado no se podra revertir el proceso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteProduct(id))
          Swal.fire(
            'Borrado!',
            'El producto fue eliminado con exito',
            'success'
          )
        }
      })
  };


  let finalIndex = pageIndex * 10;
  let initialIndex = finalIndex - 10;
  let currentPage = alcancias.slice(initialIndex, finalIndex);
  let numberOfPages = Math.ceil(alcancias.length / 10);


  const changePage = (page) => {
    setPageIndex(page);
  };
  const nextPage = () => {
    if (pageIndex < numberOfPages) setPageIndex(pageIndex + 1);
  };
  const prevPage = () => {
    if (pageIndex > 1) setPageIndex(pageIndex - 1);
  };
  console.log(alcancias)
  return (
    <div>
      <div className={styles.containerCards}>
        {currentPage.length ? (
          currentPage?.map(
            ({ id, name, title, price, stock, isAvailable, image_secure_url }) => {
            const sectionStyle = {
                background: isAvailable ? "" : "#da0b26", // Cambia el color de fondo
              };  
              return (
                <section style={sectionStyle}>
                    <img src={image_secure_url} alt="" />
                    <article>
                    <h2>Nombre: {name}</h2>
                    <h3>Precio: {price}</h3>
                    <h3>Stock: {stock}</h3>
                    </article>
                    {isAvailable? <button onClick={()=>{showAlert(id)}} disabled={!isAvailable}><Delete/></button>: <button><Update/></button>}
                </section>
              );
            }
          )
        ) : (
          <h1 style={{ color: "#23F2FF" }}>Cargando...</h1>
        )}
      </div>
      <Paginado
        pageIndex={pageIndex}
        changePage={changePage}
        numberOfPages={numberOfPages}
        next={nextPage}
        prev={prevPage}
      />
    </div>
  );
};

export default ProductosAdmin;
