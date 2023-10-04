import React from "react";
import styles from "./Card.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
// import { detail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CartShopping } from "../../Redux/actions";
import Swal from "sweetalert2";

const Card = ({
  id,
  name,
  title,
  price,
  stock,
  image,
  size,
  Categories,
  id_categorie,
}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.CartShopping);

  const handleNavigate = () => {
    navigate(`/detail/${id}`);
  };

  const showAlert = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      title: "producto agregado al carrito",
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };

  const showAlert2 = () => {
    Swal.fire({
      toast: true,
      icon: "warning",
      title: "El producto ya esta en el carrito",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };

  const handleClick = (id) => {
    dispatch(CartShopping(id));
    const found = state.find(el => el.id === id)
    if (!found) showAlert();
    else showAlert2()
  };

  return (
    <div key={id} className={styles.cardContainer}>
      <img
        src={image}
        alt={title}
        className={styles.img}
      />
      <div className={styles.containerBottom} >
        <div className={styles.title}>
        <h2 className={styles.nombre}>{name}</h2>
        <h3 className={styles.price}> ${price}</h3>
        <button className={styles.button} onClick={() => handleClick(id)}>
          <AddShoppingCartIcon className={styles.icon} sx={{ fontSize: 25 }} />
        </button>
        </div>
        <div className={styles.tags}>
          <h3 className={styles.categories}>
            {Categories?.map((c) => (c.name))}
          </h3>
          <h3 className={styles.size}>{size}</h3>
        </div>
        <h3 className={styles.stock}>Stock disponible:
        <p className={stock > 0 && +stock? styles.numStock : styles.stockSoldOut}>{stock}</p></h3>
        <div className={styles.containerButtonDetail}>
          <button className={styles.buttonDetail} onClick={handleNavigate}>
            Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
