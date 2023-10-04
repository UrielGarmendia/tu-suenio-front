import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAlcancias, actualizarProduct, categories } from "../../Redux/actions";
import styles from "./ProductosAdminActu.module.css"; 
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
    Categories: [],
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const showAlert = () => {
    Swal.fire({
      toast: false,
      icon: "success",
      title: "Alcancia agregada para editar",
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "center",
    });
  };
  const showAlert2 = () => {
    Swal.fire({
      toast: false,
      icon: "success",
      title: "Producto actualizado con éxito",
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "center",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value, Categories: [{ name: "personajes animados" }] });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Archivo seleccionado:", file);
  
   
    setEditedData({ ...editedData, image: file });
  
   
    setPreviewImage(URL.createObjectURL(file));
  };


  const handleSave = async () => {
    try {
      await dispatch(actualizarProduct(editedData.id, editedData));
      setUpdateSuccess(true);
      showAlert2("Producto actualizado con éxito");

      setTimeout(() => {
        setUpdateSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      showAlert("Error al actualizar el producto");
    }
  };
  console.log(editedData)
  const handleEditProduct = (product) => {
    showAlert();
    setUpdateSuccess(false);
    setEditedData({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      size: product.size,
      Categories: product.Categories,
      id_categorie: product.id_categorie, 
    });
  };

  useEffect(() => {
    dispatch(allAlcancias());
    dispatch(categories());
  }, []);

  useEffect(() => {
    setProducts(alcancias);
  }, [alcancias]);


  useEffect(() => {
    if (updateSuccess) {
      setEditedData({
        name: "",
        price: "",
        stock: "",
        description: "",
        size: "",
        id_categorie: "",
        Categories: [],
      });
      setPreviewImage("");
    }
  }, [updateSuccess]);

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
            <th>Estado</th>
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
              <td> {product.Categories?.map((c) => (c.name))}</td>
              <td>{product.isAvailable ? "Activo" : "Inactivo"}</td>
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