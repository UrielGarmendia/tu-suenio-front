import React from "react";
import "./Card.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import {detail} from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { CartShopping } from "../../Redux/actions";

const Card = ({ id, name, title, price, stock, image, size, Categories, id_categorie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate(`/detail/${id}`);
  };

  const handleClick = (id) => {
    dispatch(CartShopping(id))
  }

  return (
    <div key={id} className="card-container">
       <AddShoppingCartIcon className="iconAddShoppingCart" onClick={() => handleClick(id)}/>
      {/* <img src={image} alt={title} className="card-image" onClick={handleNavigate}/> */}

      <div className="card-title" onClick={handleNavigate}>
        <h3>{title}</h3>
        <h2>{name}</h2>
        <h3>Precio: {price}</h3>
        <h3>size : {size}</h3>
        <h3>categoria:{id_categorie === "1" ? "Animales" : "Personajes animados"}</h3>
        <h3>Stock disponible:{stock}</h3>
      </div>

    </div>
  );
};

export default Card;
