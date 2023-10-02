import styles from "./RegistrationForm.module.css";
import logo from "../../Assents/logoTuSuenio.png";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { validator } from "./validation";

const RegistrationForm = () => {
  const { user, loginWithRedirect } = useAuth0();
  console.log("Este es el usuario:", user);
  const [firstMarginLeft, setFirstMarginLeft] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);
  const [infoUser, setInfoUser] = useState({
    name: "",
    lastName: "",
    dni: "",
    address: "",
    phone: "",
    sub: user?.sub,
    email: user?.email,
    image: user?.picture,
  });
  const handleChange = (event) => {
    setInfoUser({ ...infoUser, [event.target.name]: event.target.value });
    setErrors(
      validator({
        ...infoUser,
        [event.target.name]: event.target.value,
      })
    );
    !Object.values(errors).length
      ? setDisabledButton(false)
      : setDisabledButton(true);
  };
  const handlePhoneChange = (value) => {
    setInfoUser({ ...infoUser, phone: value });
  };
  const firstNextClick = (event) => {
    event.preventDefault();
    setFirstMarginLeft(firstMarginLeft - 33.33);
    setCurrentPage(currentPage + 1);
  };
  const handlePrevClick = (event) => {
    event.preventDefault();
    setFirstMarginLeft(firstMarginLeft + 33.33);
    setCurrentPage(currentPage - 1);
  };
  const showAlert = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Te registraste correctamente",
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };
  const showAlert2 = () => {
    Swal.fire({
      toast: true,
      icon: "warning",
      title: "Ups!, hubo un error al registrarte",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setCurrentPage(currentPage + 1);
      const { data } = await axios.post(
        "https://tu-suenio-back.onrender.com/user/register",
        infoUser
      );
      setInfoUser({
        name: "",
        lastName: "",
        dni: "",
        address: "",
        phone: "",
      });
      setErrors({});
      setDisabledButton(true);
      showAlert();
      if (!data.error) {
        loginWithRedirect();
      }
    } catch (error) {
      console.error(error);
      setCurrentPage(currentPage);
      showAlert2();
    }
  };
  console.log(user);
  return (
    <div className={styles.principalContainer}>
      <div className={styles.container}>
        <img className={styles.img} src={logo} alt="logo" />
        {currentPage === 3 ? (
          <h2 className={styles.header}>Solo un paso más...</h2>
        ) : currentPage === 4 ? (
          <h2 className={styles.header}>Bienvenido a Tu Sueño</h2>
        ) : (
          <h2 className={styles.header}>Terminemos de registrarte</h2>
        )}
        <div className={styles.progressContainer}>
          <div className={styles.stepContainer}>
            <p className={` ${styles.p} ${styles.active}`}>Credenciales</p>
            <div className={styles.containerNumberIcon}>
              <div className={` ${styles.numberContainer} ${styles.active}`}>
                <span className={`${styles.span} ${styles.active}`}>1</span>
              </div>
              <h1 className={`${styles.iconCheck} ${styles.active}`}>
                <CheckIcon />
              </h1>
            </div>
          </div>
          <div className={styles.stepContainer}>
            <p
              className={
                currentPage >= 2 ? ` ${styles.p} ${styles.active}` : styles.p
              }>
              Nombres
            </p>
            <div className={styles.containerNumberIcon}>
              <div
                className={
                  currentPage >= 2
                    ? ` ${styles.numberContainer} ${styles.active}`
                    : styles.numberContainer
                }>
                <span
                  className={
                    currentPage >= 2
                      ? `${styles.span} ${styles.active}`
                      : styles.span
                  }>
                  2
                </span>
              </div>
              <h1
                className={
                  currentPage >= 2
                    ? `${styles.iconCheck} ${styles.active}`
                    : styles.iconCheck
                }>
                <CheckIcon />
              </h1>
            </div>
          </div>
          <div className={styles.stepContainer}>
            <p
              className={
                currentPage >= 3 ? ` ${styles.p} ${styles.active}` : styles.p
              }>
              Información
            </p>
            <div className={styles.containerNumberIcon}>
              <div
                className={
                  currentPage >= 3
                    ? ` ${styles.numberContainer} ${styles.active}`
                    : styles.numberContainer
                }>
                <span
                  className={
                    currentPage >= 3
                      ? `${styles.span} ${styles.active}`
                      : styles.span
                  }>
                  3
                </span>
              </div>
              <h1
                className={
                  currentPage >= 3
                    ? `${styles.iconCheck} ${styles.active}`
                    : styles.iconCheck
                }>
                <CheckIcon />
              </h1>
            </div>
          </div>
          <div className={styles.stepContainer}>
            <p
              c
              className={
                currentPage >= 4 ? ` ${styles.p} ${styles.active}` : styles.p
              }>
              Contacto
            </p>
            <div className={styles.containerNumberIcon}>
              <div
                className={
                  currentPage >= 4
                    ? `${styles.numberContainer} ${styles.lastNumberContainer} ${styles.active}`
                    : `${styles.numberContainer} ${styles.lastNumberContainer}`
                }>
                <span
                  className={
                    currentPage >= 4
                      ? `${styles.span} ${styles.active}`
                      : styles.span
                  }>
                  4
                </span>
              </div>
              <h1
                className={
                  currentPage >= 4
                    ? `${styles.iconCheck} ${styles.active}`
                    : styles.iconCheck
                }>
                <CheckIcon />
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.containerForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div
              className={styles.containerPage}
              style={{ marginLeft: `${firstMarginLeft}%` }}>
              <h2 className={styles.title}>Información Básica</h2>
              <div className={styles.field}>
                <label className={styles.label}>Nombre</label>
                <input
                  type="text"
                  className={styles.input}
                  name="name"
                  value={infoUser.name}
                  onChange={handleChange}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Apellido</label>
                <input
                  type="text"
                  className={styles.input}
                  name="lastName"
                  value={infoUser.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className={styles.error}>{errors.lastName}</p>
                )}
              </div>
              <div className={styles.field}>
                <button className={styles.button} onClick={firstNextClick}>
                  Siguiente
                </button>
              </div>
            </div>
            <div className={styles.containerPage}>
              <h2 className={styles.title}>Información adicional</h2>
              <div className={styles.field}>
                <label className={styles.label}>DNI</label>
                <input
                  type="text"
                  className={styles.input}
                  name="dni"
                  value={infoUser?.dni}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Dirección</label>
                <input
                  type="text"
                  className={styles.input}
                  name="address"
                  value={infoUser.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className={styles.error}>{errors.address}</p>
                )}
              </div>
              <div className={styles.field}>
                <button className={styles.button} onClick={handlePrevClick}>
                  Atrás
                </button>
                <button className={styles.button} onClick={firstNextClick}>
                  Siguiente
                </button>
              </div>
            </div>
            <div className={styles.containerPage}>
              <h2 className={styles.title}>Información de Contacto</h2>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="text"
                  className={styles.input}
                  disabled={true}
                  value={user?.email}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Número de Teléfono</label>
                <PhoneInput
                  country={"co"}
                  inputProps={{ className: styles.inputTelefono }}
                  containerClass={styles.containerClass}
                  dropdownClass={styles.dropdown}
                  name="phone"
                  value={infoUser.phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className={`${styles.field} ${styles.btns}`}>
                <button className={styles.button} onClick={handlePrevClick}>
                  Atrás
                </button>
                <button
                  type="submit"
                  className={
                    disabledButton
                      ? `${styles.button} ${styles.disabled}`
                      : styles.button
                  }
                  disabled={disabledButton}>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;