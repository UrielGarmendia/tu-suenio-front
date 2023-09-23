import React from "react";
import "./Card.css";
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
    if(!found) showAlert();
    else showAlert2()
  };

  return (
    <div key={id} className="card-container">
      <AddShoppingCartIcon
        className="iconAddShoppingCart"
        onClick={() => handleClick(id)}
      />
      {
        <img
          src={image}
          alt={title}
          className="card-image"
          onClick={handleNavigate}
        />
      }

      <div className="card-title" onClick={handleNavigate}>
        <h3>{title}</h3>
        <h2>{name}</h2>
        <h3>Precio: {price}</h3>
        <h3>size : {size}</h3>
        <h3>
          Categoria: {Categories?.map((c)=>(c.name))}
        </h3>
        <h3>Stock disponible:{stock}</h3>
      </div>
    </div>
  );
};

export default Card;
