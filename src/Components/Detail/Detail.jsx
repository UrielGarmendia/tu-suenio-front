import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartShopping, cleanDetail, detail } from "../../Redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./detail.module.css";
import Swal from "sweetalert2";
import Reviews from "../Reviews/Reviews";

const Detail = ({infoUser}) => {

  const navigate = useNavigate();

  const { id } = useParams();

  const alcancia = useSelector((state) => state.detail);
  const state = useSelector((state) => state.CartShopping);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detail(id));
    return () => {
      dispatch(cleanDetail());
    };
  },[]);

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
      icon: "warning",
      title: "El producto ya esta en el carrito",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };

  const handleClick = (id) => {
    dispatch(CartShopping(id));
    const found = state.find(el => el.id === id)
    if(!found) showAlert();
    else showAlert2()
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
          <div className={styles.button_cart_cont}>
            <button className={styles.button} onClick={() => handleClick(alcancia[0].id)}>
              Agregar al <AddShoppingCartIcon />
            </button>
          </div>
        </div>
        <div className={styles.last_cont}>
          <Reviews id={id} infoUser={infoUser} alcancia={alcancia[0]?.name}/>
        </div>
      </div>
    </div>
  );
};

export default Detail;
