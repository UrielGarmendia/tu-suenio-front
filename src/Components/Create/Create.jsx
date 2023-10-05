import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./Create.module.css";
import { validateForm } from "./validations";
import { useSelector, useDispatch } from "react-redux";
import { categories } from "../../Redux/actions";

const Create = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    stock: "",
    description: "",
    size: "",
    id_categorie: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categorie = useSelector((state) => state.categories);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors(
      validateForm({
        ...formData,
        [name]: value,
      })
    );
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Archivo seleccionado:", file);
    setFormData({ ...formData, image: file });
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleRemoveImage = () => {
    const fileInput = document.getElementById("image");
    fileInput.value = "";
    setPreviewImage("");
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
    productData.append("id_categorie", formData.id_categorie);

    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      // Manejar errores individualmente y mostrar alertas
      if (formErrors.name) {
        alert("Error en el nombre: " + formErrors.name);
      }
      if (formErrors.price) {
        alert("Error en el precio: " + formErrors.price);
      }
      if (formErrors.stock) {
        alert("Error en el stock: " + formErrors.stock);
      }
      if (formErrors.size) {
        alert("Error en el tamaño: " + formErrors.size);
      }

      return;
    }

    setErrors({});

    try {
      const response = await axios.post(
        "http://localhost:3001/products/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        console.log(response.data);
        alert("Producto creado: " + response.data.name);
        // Limpiar el formulario después de enviarlo con éxito
        setFormData({
          name: "",
          price: "",
          image: "",
          stock: "",
          description: "",
          size: "",
          id_categorie: "",
        });
        setPreviewImage("");
      } else {
        // La solicitud fue exitosa pero el servidor devuelve un error
        alert("Error al crear el producto: " + response.statusText);
      }
    } catch (error) {
      // Error en la solicitud (por ejemplo, no se pudo conectar al servidor)
      alert("Error al crear el producto: " + error.message);
    }
  };

  return (
    <div className={styles.createcontainer}>
      <h2>Crear una nueva alcancia</h2>
      <form
        className={styles.createform}
        onSubmit={handleSubmit}
        action="http://localhost:3001/products/create"
        method="POST"
        encType="multipart/form-data"
      >
        <div className={styles.group}>
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
        <div className={styles.group}>
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
        <div className={styles.group}>
          <label htmlFor=" id_categorie">categoria:</label>
          <select
            id="id_categorie"
            name="id_categorie"
            value={formData.id_categorie}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccionar categoria</option>
            {categorie.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label htmlFor="size">Tamaño:</label>
          {errors.size && <p className={styles.error}>{errors.size}</p>}
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
          <label htmlFor="image">Imagen:</label>
          <input
            className={styles.selectimg}
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
          <label className={styles.inputGropLabel} htmlFor="image">
            <span className={styles.uploadButton}>Seleccionar archivo</span>
          </label>
          {previewImage && (
            <img
              className={styles.image}
              id="preview"
              src={previewImage}
              alt="Preview"
            />
          )}
          <button
            className={styles.buttonDelete}
            type="button"
            onClick={handleRemoveImage}
          >
            Eliminar imagen
          </button>
        </div>
        <div className={styles.group}>
          <button type="submit">Crear alcancia</button>
        </div>
      </form>
    </div>
  );
};
export default Create;
