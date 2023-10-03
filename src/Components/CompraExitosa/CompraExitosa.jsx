import style from '../CompraExitosa/CompraExitosa.module.css';

const CompraExitosa = ({ productos }) => {
  return (
    <div className={style.CompraExitosa}>
      <h2>Compra Exitosa</h2>
      <p>¡Gracias por tu compra!</p>
      
      <h3>Resumen de la compra:</h3>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
      
      <p>Total: ${productos.reduce((total, producto) => total + producto.precio, 0)}</p>
    </div>
  );
};

export default CompraExitosa;