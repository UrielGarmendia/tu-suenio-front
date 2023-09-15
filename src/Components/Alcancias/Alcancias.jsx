import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { allAlcancias } from '../../Redux/actions'
import Card from '../Card/Card'
import styles from './Alcancias.module.css'
import Paginado from '../Paginado/Paginado';

const Alcancias = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allAlcancias())   
    }, [])
    const alcancias = useSelector(state => state.AllAlcancias);
    const [pageIndex, setPageIndex] = useState(1);
    let finalIndex = pageIndex * 8;
    let initialIndex = finalIndex - 8;
    let currentPage = alcancias.slice(initialIndex, finalIndex);
    let numberOfPages = Math.ceil(alcancias.length / 8);

    const changePage = (page) => {
        setPageIndex(page)
    }
    const nextPage = () => {
        if (pageIndex < numberOfPages)
            setPageIndex(pageIndex + 1)
    }
    const prevPage = () => {
        if (pageIndex > 1)
            setPageIndex(pageIndex - 1)
    }


    return (
        <div className={styles.principalContainer}>
            <div className={styles.containerCards}>
                {currentPage.length ? currentPage.map(({ id,name, title, price, image }) => {
                    return (
                        <Card id={id} name={name} title={title} price={price} image={image} stock={id} />)
                })
                    : <h1 style={{ color: '#23F2FF' }}>Cargando...</h1>}
            </div>
            <Paginado pageIndex={pageIndex} changePage={changePage} numberOfPages={numberOfPages} next={nextPage} prev={prevPage} />
        </div>
    )
}

export default Alcancias