import React from "react";
import "./Card.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
// import { detail } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { CartShopping } from "../../Redux/actions";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

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

  const handleClick = (id) => {
    dispatch(CartShopping(id));
    showAlert();
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
          categoria:{id_categorie === "1" ? "Animales" : "Personajes animados"}
        </h3>
        <h3>Stock disponible:{stock}</h3>
      </div>
    </div>
  );
};

export default Card;
