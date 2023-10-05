import React from "react";
import styles from "./banPage.module.css";

const Ban = () => {
    return (
        <div className={styles.cont}>
            <h1 className={styles.title}>Estas baneado</h1>
            <p className={styles.text}>Actualmente tu cuenta de "Tu Sueño" se encuentra desactivada.</p> 
            <p className={styles.text}>Comunícate directamente con el administrador.</p> 
            <p className={styles.text}>Puedes hacerlo por medio del ícono de Whatsapp que se encuentra abajo a la derecha.</p>     
        </div>
    )
}

export default Ban;