import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategoria, categories, deleteCategorie,allAlcancias} from "../../Redux/actions";
import axios from "axios";
import { validateFormC } from "./validationsCategorie";
import styles from "./CreateCategorie.module.css"
import Swal from "sweetalert2";

const CreateCategorie = () => {

  const [formData, setFormData] = useState({
    name: "",
  });

  const [putCategorie, setPutCategorie] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  const categoriesList = useSelector((state) => state.categories);
  const alcancias = useSelector((state) => state.AllAlcancias);

  const [errors, setErrors] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({ ...formData, [name]: value });
    setErrors(validateFormC(formData))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputErrors = validateFormC(formData);
    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
      return;
    }

    if(putCategorie.hasOwnProperty("id")) {
      try {
        await axios.put(`https://tu-suenio-back.onrender.com/categorie/${putCategorie.id}`, formData);
        dispatch(categories());
        setPutCategorie({})
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const productData = new FormData();
      productData.append("name", formData.name);
      dispatch(createCategoria(formData));
    }
  };
  const handleReset = () => {
    setFormData({ name: "" });
    setErrors({ name: "" });
    setPutCategorie({});
  };

  const existAlert = () => {
    Swal.fire({
        toast: false,
        icon: "warning",
        title: "Existen productos usando esta categoria no puedes eliminarlo",
        showConfirmButton: true,
        position: "center",
    })
};

  const deleteAlert = () => {
    Swal.fire({
        toast: false,
        icon: "warning",
        title: "Estas segura/o de eliminar la categoria",
        showConfirmButton: true,
        showCancelButton: true,
        position: "center",
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Categoria borrada con exito"
          )
        }
    })
};

const handleDeleteCategory = (categoryId) => {
  const verifyCategorie = alcancias.find(el => +el.id_categorie === categoryId);
  if(verifyCategorie) {
    return existAlert();
  } else {
    deleteAlert()
    dispatch(deleteCategorie(categoryId));
    setPutCategorie({});
  }
};

    return (
      <div className={styles.container}>
        <div className={styles.categoriesList}>
          <h2>Categorías Existentes</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre de Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categoriesList.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>
                    <button className={styles.deleteButton} onClick={() => handleDeleteCategory(c.id)}>
                      Eliminar
                    </button>
                    <button className={styles.editar} onClick={() => setPutCategorie({ id: c.id, name: c.name })}>
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.createCategoryForm}>
          <h2>{putCategorie.hasOwnProperty("id") ? `Actualizar categoría: '${putCategorie.name}'` : "Crear nueva categoría"}</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label htmlFor="name" className={styles.label}>
                Categoría:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              {errors?.name ? <div className={styles.errorText}>{errors.name}</div> : (errors.name = "")}
            </div>
            <button type="submit" className={styles.createButton}>
              {putCategorie.hasOwnProperty("id") ? "Actualizar" : "Crear categoría"}
            </button>
          </form>
          {putCategorie.hasOwnProperty("id") && (
            <button onClick={handleReset} className={styles.resetButton}>
              Volver
            </button>
          )}
        </div>
      </div>
    );
  };
  
export default CreateCategorie;