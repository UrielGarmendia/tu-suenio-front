import React from 'react'
import styles from './Paginado.module.css'

const Paginado = ({changePage, numberOfPages, next, prev}) => {
    let pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={styles.unorderedList}>{
                pageNumbers.map((number) => {
                    return (
                        <li key={number} className={styles.listItem}>
                            <a onClick={() => changePage(number)} className={styles.numbers}>{number}</a>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default Paginado