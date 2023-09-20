import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Carrito = () => {

    let suma = 0;
    let totalSum = 0;

    const state = useSelector(state => state.CartShopping);
    let [index, setIndex] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return state.length ? state?.map(item => ({...item, quantity: 1})) : JSON.parse(savedCart);
    });


    const handleSum = (stock, indexEl) => {
        if(index[indexEl].quantity < stock) {
            const stateCopy = [...index];
            stateCopy[indexEl].quantity++;
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

    const handlerReduce = (arr) => {
        const totalProducts = arr?.reduce((a, b) => a + b.quantity ,0);
        return totalProducts;
    };

    useEffect(() => {
        if(index?.length) localStorage.setItem("cart", JSON.stringify(index));
    }, [index]); 

    return (
        <div className="car-container">
            <h1>Tu carrito</h1>
            { index?.map((el, indexEl) => (
                <div key={el.id}>
                    <div><img src={el.image_secure_url} alt={el.name} /></div> 
                    <h2>{el.name}</h2>
                    <h2>Size: {el.size}</h2>
                    <h2>Stock: {el.stock}</h2>
                    <p>{el.description}</p>
                    <button onClick={() => handleDelete(el.id)}>Eliminar</button>
                    <button>Comprar ahora</button>
                    <div><button onClick={() => handleSum(el.stock, indexEl)}>+</button>
                    <h4>{el.quantity}</h4>
                    <button onClick={() => handleRest(indexEl)}>-</button>
                    </div>
                    <h2>Precio: {handleSuma(el.price, el.quantity)}</h2>
                </div>
            ))}
            <div>
                <h2>Suma total: {totalSum}</h2>
                <h2>Total de productos: {handlerReduce(index)}</h2>
            </div>
        </div>
    )
}

export default Carrito;