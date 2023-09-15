import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./Create.module.css"
import { validateForm } from "./validations";


const Create = () => {
    const [formData, setFormData] = useState({
      name: "",
      price: "",
      image: null,
      stock: "",
      description: "",
      size: "",
      categories:""
    });
    
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("Disponible");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors(validateForm(formData))
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
  
      const productData = new FormData();
      productData.append("name", formData.name);
      productData.append("price", formData.price);
      productData.append("image", formData.image);
      productData.append("stock", formData.stock);
      productData.append("description", formData.description);
      productData.append("size", formData.size);
      productData.append("categories", formData.categories);
      
      

      if (Object.keys(errors).length > 0) {
        console.log("Errores de validación:", errors);
        return;
      }
      setErrors({});


      try {
        const response = await axios.post("http://localhost:3001/products/create", formData 
         
    );
        alert("Producto creado:", response.data);
        if (formData.stock === "0") {
          setStatus("Por pedido");
        } else {
          setStatus("Disponible");
        }
      } catch (error) {
       alert("Error al crear el producto:", error);
      }
    };
  
  
    return (
      <div className={styles.createcontainer}>
        <h2>Crear una nueva alcancia</h2>
        <form onSubmit={handleSubmit}>
          <div  className={styles.group}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div  className={styles.group}>
            <label htmlFor="price">Precio:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
         {errors.price && <p className={styles.error}>{errors.price}</p>}
          </div>
          <div className={styles.group}>
            <label htmlFor="image">Imagen:</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={handleInputChange}
              accept="image/*"
              required
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="stock">Stock:</label>
            <input
              type="text"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              required
            />
             {errors.stock && <p className={styles.error}>{errors.stock}</p>}
          </div>
          <div className={styles.group}>
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div  className={styles.group}>
            <label htmlFor="categories">categoria:</label>
            <select
              id="categories"
              name="categories"
              value={formData.categories}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar categoria</option>
              <option value="animales">animales</option>
              <option value="personajes animado">personajes animado</option>
              </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="size">Tamaño:</label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar tamaño</option>
              <option value="chiquitina">Chiquitina</option>
              <option value="pequeña">Pequeña</option>
              <option value="mediana">Mediana</option>
              <option value="grande">Grande</option>
            </select>
          </div>
          <div className={styles.group}>
            <button type="submit">Crear alcancia</button>
          </div>
        </form>
      </div>
    );
  };
export default Create;