import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAlcancias } from "../../Redux/actions";
import Card from "../Card/Card";
import styles from "./Alcancias.module.css";
import Paginado from "../Paginado/Paginado";

const Alcancias = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAlcancias());
  }, []);

  const alcancias = useSelector((state) => state.AllAlcancias);
  const [pageIndex, setPageIndex] = useState(1);
  let finalIndex = pageIndex * 12;
  let initialIndex = finalIndex - 12;
  let currentPage = alcancias.slice(initialIndex, finalIndex);
  let numberOfPages = Math.ceil(alcancias.length / 12);

  useEffect(() => {
    setPageIndex(1);
  }, [alcancias]);

  const changePage = (page) => {
    setPageIndex(page);
  };
  const nextPage = () => {
    if (pageIndex < numberOfPages) setPageIndex(pageIndex + 1);
  };
  const prevPage = () => {
    if (pageIndex > 1) setPageIndex(pageIndex - 1);
  };

  return (
    <div className={styles.principalContainer}>
      <div className={styles.containerCards}>
        {currentPage.length ? (
          currentPage?.map(
            ({
              id,
              name,
              title,
              price,
              image,
              stock,
              size,
              Categories,
              id_categorie,
              image_secure_url,
            }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  // id_categorie={Categories[0].name}
                  id_categorie={id_categorie}
                  name={name}
                  title={title}
                  price={price}
                  image={image_secure_url}
                  stock={stock}
                  size={size}
                  Categories={Categories}
                />
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

export default Alcancias;
