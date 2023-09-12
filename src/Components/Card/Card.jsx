import React from "react";

const Card = ({ id, title, price, stock, image}) => {
  return (
    <div key={id} className="card-container">
      <img src={image} alt={title} className="card-image"/>
      <h2>{title}</h2>
      <h3 className="card-price">Precio: {price}</h3>
      <h3>Stock disponible: {stock}</h3>
      <h3>Temática:</h3>
    </div>
  )
}

export default Card;