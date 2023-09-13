import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { allAlcancias } from '../../Redux/actions'
import axios from 'axios'
import Card from '../Card/Card'
import styles from './Alcancias.module.css'

const Alcancias = () => {

    const dispatch = useDispatch()
    const alcancias = useSelector(state => state.AllAlcancias)
    console.log(alcancias);

    useEffect(() => {
        dispatch(allAlcancias())
    }, [])


    return (
        <div className={styles.principalContainer}>
            <div className={styles.containerCards}>
                {alcancias.length ? alcancias.map(({ id, title, price, image }) => {
                    return (
                        <Card id={id} title={title} price={price} image={image} stock={id} />)
                })
                    : <h1>Cargando...</h1>}
            </div>
        </div>
    )
}

export default Alcancias