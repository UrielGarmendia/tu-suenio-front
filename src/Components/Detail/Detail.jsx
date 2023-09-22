import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartShopping, detail } from "../../Redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./detail.module.css";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react"

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const alcancia = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detail(id));
  }, []);

  const handleNavigate = () => {
    navigate(-1);
  };

  const showAlert = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      title: "producto agregado al carrito",
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };

    const handleClick = (id) => {
    dispatch(CartShopping(id));
    showAlert();
  };

  return (
    <div className={styles.cont}>
      <button className={styles.close_button} onClick={handleNavigate}>
        <UndoIcon />
      </button>
      <div className={styles.general_cont}>
        <div className={styles.image_cont}>
          <img
            src={alcancia[0]?.image_secure_url}
            alt={alcancia[0]?.name}
            className={styles.image}
          />
        </div>
        <div className={styles.info_cont}>
          <h2 className={styles.h2}>{alcancia[0]?.name}</h2>
          <h4 className={styles.description}>Descripción:</h4>
          <p>{alcancia[0]?.description}</p>
          <div className={styles.separador}></div>
          <h4>+ Tamaño: {alcancia[0]?.size}</h4>
          <h4>+ Categoria: {alcancia[0]?.Categories[0]?.name}</h4>
          <h4>+ Stock: {alcancia[0]?.stock} unidades</h4>
          <h4>+ Precio: $ {alcancia[0]?.price}</h4>
          <div className={styles.separador}></div>
          <div className={styles.button_cart_cont}>
            <button onClick={() => handleClick(id)}>
              Agregar al <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
