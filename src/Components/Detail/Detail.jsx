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

  const showAlert2 = () => {
    Swal.fire({
      toast: true,
      icon: "info",
      title: "Logueate para agregar un producto al carrito",
      showConfirmButton: true,
      position: "top"
    }).then(() => {
      loginWithRedirect();
    });
  };

    const handleClick = (id) => {
    if(isAuthenticated) {
    dispatch(CartShopping(id));
    showAlert();
    } else {
      showAlert2()
    }
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
          <h4 className={styles.price}>$ {alcancia[0]?.price}</h4>
          <h4 className={styles.h4_info}>Tamaño: {alcancia[0]?.size}</h4>
          <h4 className={styles.h4_info}>Categoria: {alcancia[0]?.Categories[0]?.name}</h4>
          <h4 className={styles.h4_info}>Stock: {alcancia[0]?.stock} unidades</h4>
          <h4 className={styles.description}>Descripción:</h4>
          <p className={styles.paragraph}>{alcancia[0]?.description}</p>
        </div>
        <div className={styles.last_cont}>
          <div className={styles.button_cart_cont}>
            <button className={styles.button} onClick={() => handleClick(id)}>
              Agregar al <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
