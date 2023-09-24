import React, { useEffect } from "react";
import styles from "../Home/Home.module.css"
import fiestas from "./fiesta.png"
import plan from "./plan.png"
import dequesirve from "./dequesirve.png"
import gafas from "./gafas.png"
import telefono from "./telefono.png"
import credito from "./credito.png"
import mujer from "./mujer.png"
import plandeahorro from "./plan de ahorro.jpg"
import Slide from "../Slide/Slide"
import cerdos from "./cerdos.png"
import whatsapp from "../../Assents/WhatsApp.png";
import { useDispatch } from "react-redux";
import { categories } from "../../Redux/actions";

const home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categories());
  }, []);

  return (
    <div className={styles.principal}>
      <Slide />
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={cerdos} alt="cerdos" className={styles.cerdos} />
        </div>
        <div className={styles.textcerditos}>
          <h2>¿Que tamaños tenemos?</h2>
          <lu>
            <li>chiquitina</li>
            <p className={styles.p}>10cm Alto, 10cm Ancho, 10cm Largo.</p>
            <li>pequeña</li>
            <p className={styles.p}>12cm Alto, 13cm Ancho, 14cm Largo.</p>
            <li>mediana</li>
            <p className={styles.p}>15cm Alto, 13cm Ancho, 16cm Largo.</p>
            <li>grande</li>
            <p className={styles.p}>23cm Alto, 21cm Ancho, 23cm Largo.</p>

          </lu>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>¿Que hago si no hay en la tienda el tamaño o el diseño que quiero?</h2>
          <p>
            
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={dequesirve} alt="dequesirve" className={styles.fiestaLogo} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={plan} alt=" plan" className={styles.planLogo} />
        </div>
        <div className={styles.textContainer}>
          <h2>¿Por qué es importante tener un plan de ahorro?</h2>
          <p>
            Un plan de ahorro te impulsa a ser disciplinado con tus finanzas personales.
            Al asignar una parte de tus ingresos para el ahorro de manera regular, desarrollas
            hábitos financieros saludables y evitas el gasto excesivo; Ahorrar según un plan te
            brinda seguridad financiera. Sabes que tienes recursos disponibles para lidiar
            con imprevistos y para alcanzar tus metas financieras a largo plazo. Esto reduce
            el estrés relacionado con las preocupaciones financieras.
          </p>
          <div>
            <img src={plandeahorro} alt="plandeahorro" className={styles.imgAhorro} />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>¿Por qué es importante ahorrar ?</h2>
          <p>
            Ahorrar te permite tener un colchón de dinero disponible
            para emergencias inesperadas, como gastos médicos, reparaciones
            de automóviles o pérdida de empleo. Esto evita que
            te endeudes o te veas en situaciones financieras difíciles; tambien
            Ahorrar te ayuda a trabajar hacia metas financieras a corto y largo plazo,
            como comprar una casa, pagar la educación de tus hijos, tomar unas vacaciones
            soñadas o jubilarte cómodamente.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={gafas} alt="gafas" className={styles.fiestaLogo} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={telefono} alt="telefono" className={styles.planLogo} />
        </div>
        <div className={styles.textContainer}>
          <h2>Implementa el ahorro a tus hijos</h2>
          <p>
            Muchos niños no comprenden que hay que administrar
            el dinero o como utilizarlo de forma correcta. Por esto
            es importante enseñar desde pequeños la importancia de tener
            hábitos de ahorro para que cumplan su sueño no les regales las cosas
            , que sientan que las consiguieron con su esfuerzo.

          </p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>¿Para qué puedo ahorrar?</h2>
          <lu>
            <li>Para tu nueva vivienda</li>
            <li>Para tu nuevo negocio</li>
            <li>Para la educación de tus hijos </li>
            <li>Para emergencias médicas o de otro tipo.</li>
            <li>Para tomar vacaciones </li>
            <li>Para tu nuevo Vehículo (carro o moto) </li>
            <li>Para cubrir los gastos de tu hogar </li>
            <li>Para pagar cuentas pendientes</li>
            <li>Para invertir en ti </li>
            <li>Para tu jubilación </li>
          </lu>
      
        </div>
        <div className={styles.imageContainer}>
          <img src={credito} alt="credito" className={styles.fiestaLogo} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>¿Para qué otros eventos puedo usar una alcancía?</h2>
          <p>
            Nuestras alcancías sirven para cualquier tipo de evento, ya que
            puedes personalizarlas a tu gusto y usarlas como por ejemplo:
            recordatorios en bodas, fiestas infantiles, prácticamente para lo
            que quieras.
          </p>
          <h2>¡Es momento!</h2>
          <p>Ahorra ahora y que mejor que en una
            alcancia diseñada con tu personaje favorito
            especialmente diseñado para ti. ¿Empezamos?.</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={fiestas} alt="fiestas" className={styles.fiestaLogo} />
        </div>
      </div>
    </div>
  );
};

export default home;
