import React from "react";
import "./Card.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ id, title, price, stock, image}) => {
  return (
    <div key={id} className="card-container">
      <AddShoppingCartIcon className="iconAddShoppingCart"/>
      <img src={image} alt={title} className="card-image"/>
      <h3 className="card-title">{title}</h3>
      <h3 className="card-price">Precio: {price}</h3>
      <h3>Temática:</h3>
      <h3 className="stockDisponible">Stock disponible: {stock}</h3>
    </div>
  )
}

export default Card;