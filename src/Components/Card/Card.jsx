import React from "react";
import "./Card.css"

const Card = ({ id, title, price, stock, image}) => {
  return (
    <div key={id} className="card-container">
      <img src={image} alt={title} className="card-image"/>
      <h3 className="card-title">{title}</h3>
      <h3 className="card-price">Precio: {price}</h3>
      <h3>Stock disponible: {stock}</h3>
      <h3>Temática:</h3>
    </div>
  )
}

export default Card;