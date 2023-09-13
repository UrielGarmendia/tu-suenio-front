import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import styles from './Alcancias.module.css'

const Alcancias = () => {
    const [alcancias, setAlcancias] = useState([])
    useEffect(() => {
        try {
            const getAlcancias = async () => {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setAlcancias(data)
            }
            getAlcancias();
        } catch (error) {
            console.error("error al obtener los productos", error)
        }
    }, [])
    return (
        <div className={styles.principalContainer}>
            {alcancias? alcancias.map(({id, title, price, image}) => {
                return(
                <Card id={id} title={title} price={price} image={image} stock={id}/>)})
            : <h1>Cargando...</h1>}
        </div>
    )
}

export default Alcancias