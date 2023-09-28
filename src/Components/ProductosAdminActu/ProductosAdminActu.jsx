import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAlcancias, actualizarProduct, categories } from "../../Redux/actions";
import styles from "./ProductosAdminActu.module.css"; // Asegúrate de que la ruta del archivo CSS sea correcta
import Swal from "sweetalert2";
const ProductosAdminActu = ({ onCancel }) => {
  const dispatch = useDispatch();
  const alcancias = useSelector((state) => state.AllAlcancias);
  const categorias = useSelector((state) => state.categories);
  const [products, setProducts] = useState([]);
  const [editedData, setEditedData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    size: "",
    id_categorie: "",
    Categories:[],
  });
  const showAlert = () => {
    Swal.fire({
      toast: false,
      icon: "success",
      title: "Alcancia agregada para editar",
      timer:1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "center",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value, Categories: [{ name: "personajes animados" }]});
  };

  const handleSave = async () => {
    try {
      await dispatch(actualizarProduct(editedData.id, editedData));
      // onCancel();
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };
  console.log(editedData)
  const handleEditProduct = (product) => {
    showAlert();
    setEditedData({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      size: product.size,
      Categories: product.Categories,
      
    });
  };

  useEffect(() => {
    dispatch(allAlcancias());
    dispatch(categories());
  }, []);

  useEffect(() => {
    setProducts(alcancias);
  }, [alcancias]);

  console.log(editedData)

  return (
    <div className={styles.productosAdminContainer}>
      <h2>Lista de Productos</h2>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Descripción</th>
            <th>Tamaño</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>{product.size}</td>
              <td> {product.Categories?.map((c)=>(c.name))}</td>
              <td>
                <button
                  className={styles.editButton}
                  onClick={() => handleEditProduct(product)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.editForm}>
        <h2>Editar Producto</h2>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            name="price"
            value={editedData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            value={editedData.stock}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            name="description"
            value={editedData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Categories">Categorias:</label>
          <select
            id="Categories"
            name="id_categorie"
            value={editedData.id_categorie}
            onChange={handleInputChange}
            required>
            <option value="">Seleccionar categoria</option>
            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="size">Tamaño:</label>
          <select
            name="size"
            value={editedData.size}
            onChange={handleInputChange}
          >
            <option value="chiquitina">Chiquitina</option>
            <option value="pequeña">Pequeña</option>
            <option value="mediana">Mediana</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <button className={styles.saveButton} onClick={handleSave}>
          Guardar
        </button>
        <button className={styles.cancelButton} onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ProductosAdminActu;