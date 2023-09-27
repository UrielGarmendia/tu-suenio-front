import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./carrito.module.css";
import { deleteItemCart } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const Carrito = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-1b225994-c2fb-4e59-963b-b53ab55e0b46");
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  let suma = 0;
  let totalSum = 0;

  const state = useSelector((state) => state.CartShopping);

  const newState = () => {
    state.map((e) => {
      e.unit_price = e?.price;
    });
  };
  newState();

  console.log("este es el carrito", state);

  let [index, setIndex] = useState(
    state?.map((item) =>
      !Object.prototype.hasOwnProperty.call(item, "quantity")
        ? { ...item, quantity: 1, unit_price: 333 }
        : item
    )
  );

  const handleSum = (stock, indexEl) => {
    if (index[indexEl].quantity < stock) {
      const stateCopy = [...index];
      stateCopy[indexEl].quantity++;
      localStorage.setItem("cart", JSON.stringify(stateCopy));
      setIndex(stateCopy);
    }
  };

  const handleRest = (indexEl) => {
    if (index[indexEl].quantity > 1) {
      const stateCopy = [...index];
      stateCopy[indexEl].quantity--;
      localStorage.setItem("cart", JSON.stringify(stateCopy));
      setIndex(stateCopy);
    }
  };

  const handleSuma = (price, quantity) => {
    suma = price * quantity;
    totalSum = totalSum + suma;
    return suma;
  };

  const handleDelete = (id) => {
    const filtrado = index.filter((el) => el.id !== id);
    dispatch(deleteItemCart(filtrado));
    localStorage.setItem("cart", JSON.stringify(filtrado));
    setIndex(filtrado);
  };

  const handlerReduce = (arr) => {
    const totalProducts = arr?.reduce((a, b) => a + b.quantity, 0);
    return totalProducts;
  };

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/detail/${id}`);
  };

  const showAlert = () => {
    Swal.fire({
      toast: true,
      icon: "info",
      title: "Debes estar logueado para continuar con la compra",
      showConfirmButton: true,
      position: "top",
    }).then(() => {
      loginWithRedirect();
    });
  };

  const handleBuy = async () => {
    if (isAuthenticated) {
      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
      }
      return;
    } else {
      showAlert();
    }
  };

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://tu-suenio-back.onrender.com/payment/create_preference",
        state
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.cont}>
      <div className={styles.cont_items}>
        <h1 className={styles.h1}>Tu carrito</h1>
        {index.length > 0 ? (
          index?.map((el, indexEl) => (
            <div className={styles.item} key={el.id}>
              <div className={styles.image_cont}>
                <img
                  className={styles.image}
                  src={el.image_secure_url}
                  alt={el.name}
                  onClick={() => handleNavigate(el.id)}
                />
              </div>
              <div className={styles.name_cont}>
                <h2 className={styles.name}>{el.name}</h2>
                <h4 className={styles.size}>Tamaño: {el.size}</h4>
                <div className={styles.delete}>
                  <div className={styles.delete_cont}>
                    <DeleteIcon
                      className={styles.DeleteIcon}
                      onClick={() => handleDelete(el.id)}
                    />
                    <p className={styles.text_delete}>Eliminar</p>
                  </div>
                </div>
              </div>
              <div className={styles.cont_quantity}>
                <div className={styles.quantity}>
                  <button
                    className={styles.button_quantity}
                    onClick={() => handleRest(indexEl)}>
                    -
                  </button>
                  <h4>{el.quantity}</h4>
                  <button
                    className={styles.button_quantity}
                    onClick={() => handleSum(el.stock, indexEl)}>
                    +
                  </button>
                </div>
                {el.stock === el.quantity ? (
                  <h4 className={styles.stock_limit}>
                    Solo hay {el.stock} unidades
                  </h4>
                ) : (
                  <h4 className={styles.stock}>Stock: {el.stock} unidades</h4>
                )}
              </div>
              <h2 className={styles.price}>
                $ {handleSuma(el.price, el.quantity)}
              </h2>
            </div>
          ))
        ) : (
          <h3>Todavía no tienes productos en tu carrito</h3>
        )}
      </div>
      <div className={styles.total}>
        <h4>
          Total productos {"("} {handlerReduce(index)} {")"}
        </h4>
        <h3>Total compra $ {totalSum}</h3>
        <button className={styles.button_compra} onClick={handleBuy}>
          Comprar
        </button>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </div>
  );
};

export default Carrito;
