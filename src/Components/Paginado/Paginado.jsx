import React, { useState } from 'react'
import styles from './Paginado.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Paginado = ({ pageIndex, changePage, numberOfPages, next, prev }) => {

    let pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className={styles.principalContainer}>
            <div className={styles.pagination}>
                <button onClick={prev} className={styles.nextButton}> <ArrowBackIosNewIcon className={styles.iconBack} />prev</button>
                <ul className={styles.unorderedList}>{
                    pageNumbers.map((number) => {
                        const isActive = number === pageIndex;
                        const listItemClassName = isActive? `${styles.listItem} ${styles.activeListItem}`: styles.listItem;
                        return (
                            <li key={number} className={listItemClassName} onClick={() => changePage(number)}>{number}</li>
                        )
                    })
                }
                </ul>
                <button onClick={next} className={styles.prevButton}>next<ArrowForwardIosIcon className={styles.iconNext} /></button>
            </div>
        </nav>
    )
}

export default Paginado