import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./carrito.module.css";
import { deleteItemCart } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const Carrito = ({ infoUser }) => {
  const stripePromise = loadStripe(
    "pk_test_51NvrrEHVuLRaKy6b8nJ9tZSwmJNSUStDdReBhZ4s9hQQLrydSWTunxN35HCNNQtEq056cUmGgX09hNy9HfsTK21y00NPQA7dFA"
  );
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  let suma = 0;
  let totalSum = 0;

  const state = useSelector((state) => state.CartShopping);

  let [index, setIndex] = useState(
    state?.map((item) =>
      !Object.prototype.hasOwnProperty.call(item, "quantity")
        ? { ...item, quantity: 1 }
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
      return;
    } else {
      showAlert();
    }
  };

  const CheckoutForm = ({ infoUser }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState("");
    console.log(infoUser?.id, "INFOUSER MAN");

    console.log(index, "INDEX");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        const { id } = paymentMethod;
        const valor = index.map((e) => {
          return e.price * e.quantity;
        });
        console.log(valor, "esto es valor");

        const amount = valor.reduce(
          (a, b) => a + (typeof b === "number" ? b : 0),
          0
        );
        console.log(amount, "esto es");

        const productos = index.map((e) => {
          const { id, quantity, price, name } = e;
          return { id, quantity, price, name };
        });

        try {
          const { data } = await axios.post(
            "https://tu-suenio-back.onrender.com/payment/newPayment",
            {
              amount,
              id,
            }
          );
          console.log(index.id, "ID DE LOS PRODUCTOS");

          console.log(data, "ESTO ES DATA MAN");
          setMessage(data.message);
          elements.getElement(CardElement).clear();

          const response = await axios.post(
            "https://tu-suenio-back.onrender.com/order",
            {
              status: data.message,
              totalprice: amount,
              UserId: infoUser?.id,
              products: productos,
            }
          );
          console.log("info en la response: ", response);

          const dataOrder = response.data;
          console.log("info en el dataOrder", dataOrder);
          const notification = await axios.post(
            "https://tu-suenio-back.onrender.com/payment/order-notification",
            {
              dataOrder,
            }
          );

          if (data.message === "succeeded") {
            setTimeout(function () {
              window.location.href = "/payment/success";
            }, 3000);
          }
        } catch (error) {
          console.error(error, "esto es el error");
        }
      }
    };
    return (
      <div className={styles.cont_form_buy}>
        <form className={styles.form_buy} onSubmit={handleSubmit}>
          <CardElement />
          <button onClick={handleBuy} className={styles.button_compra}>
            Comprar
          </button>
          {message ? <p>{message}</p> : ""}
        </form>
      </div>
    );
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
                    onClick={() => handleRest(indexEl)}
                  >
                    -
                  </button>
                  <h4>{el.quantity}</h4>
                  <button
                    className={styles.button_quantity}
                    onClick={() => handleSum(el.stock, indexEl)}
                  >
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

        <Elements stripe={stripePromise}>
          <CheckoutForm infoUser={infoUser} />
        </Elements>
      </div>
    </div>
  );
};

export default Carrito;
