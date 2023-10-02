import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategoria, categories, deleteCategorie} from "../../Redux/actions";
import axios from "axios";
import { validateFormC } from "./validationsCategorie";
import styles from "./CreateCategorie.module.css"

const CreateCategorie = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  const categoriesList = useSelector((state) => state.categories);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    const inputErrors = validateFormC({ [name]: value });
    setErrors({ ...errors, ...inputErrors });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputErrors = validateFormC(formData);
    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
      return;
    }

    const productData = new FormData();
    productData.append("name", formData.name);
    dispatch(createCategoria(formData));
  };
  const handleDeleteCategory = (categoryId) => {
    if (window.confirm("¿Seguro que deseas eliminar esta categoría? -Asegurate de no estar usando esta categoria")) {
      dispatch(deleteCategorie(categoryId));
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.categoriesList}>
      <h2>Categorías Existentes</h2>
      <ul>
        {categoriesList.map((c) => (
          <li key={c.id}>
            {c.name}
            <button className={styles.deleteButton} onClick={() => handleDeleteCategory(c.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.createCategoryForm}>
      <h2>Crear Nueva Categoría</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label htmlFor="name">Categoría:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <div className={styles.errorText}>{errors.name}</div>}
        </div>
        <button type="submit" className={styles.createButton}>Crear Categoría</button>
      </form>
    </div>
  </div>
);
};
  
export default CreateCategorie;