import React from "react";
import fiestas from "./fiestas.jpg"
import styles from "../Home/Home.module.css"
import plan from "./plan.png"


 const home = () => {
    return (
        <div className={styles.principal}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={plan} alt="plan" className={styles.planLogo} />
          </div>
          <div className={styles.textContainer}>
            <h2>por que es importante el plan de ahorro ?</h2>
            <p>
              Tener un plan de ahorro debería ser importante para poder llevar un
              orden de ahorro, así va a ser más fácil llegar al éxito del ahorro.
            </p>
            <div className={styles.informacion}>
                <p className={styles.masinfop}>Mas informacion</p>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h2>para que otros eventos puedo usar una alcancía?</h2>
            <p>
              Nuestras alcancías sirven para cualquier tipo de evento, ya que
              puedes personalizarlas a tu gusto y usarlas como por ejemplo:
              recordatorios en bodas, fiestas infantiles, prácticamente para lo
              que quieras.
            </p>
            <div className={styles.informacion1}>
                <p className={styles.masinfop}>Mas informacion</p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={fiestas} alt="fiestas" className={styles.fiestaLogo} />
          </div>
        </div>
      </div>
    );
  };

export default home