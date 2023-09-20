import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./carrito.module.css";

const Carrito = () => {

    let suma = 0;
    let totalSum = 0;

    const state = useSelector(state => state.CartShopping);
    let [index, setIndex] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : state.map(item => ({...item, quantity: 1}));
    });

    const handleSum = (stock, indexEl) => {
        if(index[indexEl].quantity < stock) {
            const stateCopy = [...index];
            stateCopy[indexEl].quantity++
            setIndex(stateCopy);
        }
    };

    const handleRest = (indexEl) => {
        if(index[indexEl].quantity > 1) {
            const stateCopy = [...index];
            stateCopy[indexEl].quantity--;
            setIndex(stateCopy);
        }
    };

    const handleSuma = (price, quantity) => {
        suma = price * quantity;
        totalSum = totalSum + suma;
        return suma;
    }

    const handleDelete = (id) => {
       const filtrado = index.filter(el => el.id !== id);

       if(!filtrado.length) localStorage.removeItem("cart")
       setIndex(filtrado)
    }

    useEffect(() => {
        if(index.length > 0) localStorage.setItem("cart", JSON.stringify(index));
    }, [index]); 

    return (
        <div className={styles.cont}>
            <div className={styles.cont_items}>
                <h1>Tu carrito</h1>
                { index.map((el, indexEl) => (
                    <div className={styles.item} key={el.id}>
                        <img className={styles.image} src={el.image_secure_url} alt={el.name}/>
                        <div className={styles.name}>
                            <h2 className={styles.h2Name}>{el.name}</h2>
                            <h4>Tamaño: {el.size}</h4>
                            <div className={styles.spans}>
                                <span className={styles.span}  onClick={() => handleDelete(el.id)}>Eliminar</span>
                                <span className={styles.span} >Comprar ahora</span>
                            </div>
                        </div> 
                        <div className={styles.cont_quantity}>
                            <div className={styles.quantity}>
                                <button className={styles.button_quantity} onClick={() => handleRest(indexEl)}>-</button>
                                <h4>{el.quantity}</h4>
                                <button className={styles.button_quantity} onClick={() => handleSum(el.stock, indexEl)}>+</button>
                            </div>
                            <h4>Stock: {el.stock}</h4>
                        </div>
                        <h2 className={styles.h2Price}>$ {handleSuma(el.price, el.quantity)}</h2>
                    </div>
                ))}
            </div>
            <div className={styles.total}>
                <h4>Total productos {2}</h4>
                <h3>Total compra $ {totalSum}</h3>
                <button className={styles.button_compra}>Comprar</button>
            </div>
        </div>
    )
}

export default Carrito;