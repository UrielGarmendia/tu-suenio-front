import React from "react";
import { useState } from "react";
import axios from "axios";

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
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
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
      console.log(formData);
      try {
        const response = await axios.post("http://localhost:3001/products/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Producto creado:", response.data);
      } catch (error) {
        console.error("Error al crear el producto:", error);
      }
    };
  
    return (
      <div>
        <h2>Crear un nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Precio:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
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
          <div>
            <label htmlFor="stock">Stock:</label>
            <input
              type="text"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div>
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
          <div>
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
          <div>
            <button type="submit">Crear Producto</button>
          </div>
        </form>
      </div>
    );
  };
export default Create;