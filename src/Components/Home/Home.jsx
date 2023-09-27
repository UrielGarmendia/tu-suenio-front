import React, { useEffect } from "react";
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
import styles from "../Home/Home.module.css"

const home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categories());
  }, []);

  return (
    <div className={styles.principal}>
      <Slide />
      <div className={styles.row}>
        <div className={styles.cont_sizes}>
          <div className={styles.imageContainer}>
            <img src={cerdos} alt="cerdos" className={styles.cerdos} />
          </div>
          <div className={styles.textcerditos}>
            <h2 className={styles.title_sizes}>¿Que tamaños tenemos?</h2>
            <lu className={styles.lu}>
              <li>Chiquitina
              <p className={styles.p}>10cm Alto, 10cm Ancho, 10cm Largo.</p></li>
              <li>Pequeña
              <p className={styles.p}>12cm Alto, 13cm Ancho, 14cm Largo.</p></li>
              <li>Mediana
              <p className={styles.p}>15cm Alto, 13cm Ancho, 16cm Largo.</p></li>
              <li>Grande
              <p className={styles.p}>23cm Alto, 21cm Ancho, 23cm Largo.</p></li>

            </lu>
          </div>
        </div>
        <div className={styles.cont_question}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>¿Que hago si no hay en la tienda el tamaño o el diseño que quiero?</h2>
            <p className={styles.text}>
              Ponte en contacto con nosotros para que podamos darle solución a tu necesidad. 
              Puedes hacerlo a través del botón de Whatsapp que encontrarás abajo a la derecha.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={dequesirve} alt="dequesirve" className={styles.fiestaLogo2} />
          </div>
        </div>
      </div>

      <div className={styles.rowOnly}>
          <div className={styles.imageContainerOnly}>
            <img src={plandeahorro} alt="plandeahorro" className={styles.imgAhorro} />
          </div>
          <div className={styles.textContainerOnly}>
            <h2>¿Por qué es importante tener un plan de ahorro?</h2>
            <p>
              Un plan de ahorro te impulsa a ser disciplinado con tus finanzas personales.
              Al asignar una parte de tus ingresos para el ahorro de manera regular, desarrollas
              hábitos financieros saludables y evitas el gasto excesivo; Ahorrar según un plan te
              brinda seguridad financiera. Sabes que tienes recursos disponibles para lidiar
              con imprevistos y para alcanzar tus metas financieras a largo plazo. Esto reduce
              el estrés relacionado con las preocupaciones financieras.
            </p>
            <div className={styles.cont_planLogo}>
              <img src={plan} alt=" plan" className={styles.planLogo} />
            </div>
          </div>
      </div>

      <div className={styles.row}>
        <div className={styles.cont_events}>
            <h2 className={styles.title_events}>¿Para qué otros eventos puedo usar una alcancía?</h2>
            <div className={styles.text_image}>
              <p>
                Nuestras alcancías sirven para cualquier tipo de evento, ya que
                puedes personalizarlas a tu gusto y usarlas como por ejemplo:
                recordatorios en bodas, fiestas infantiles, prácticamente para lo
                que quieras.
              </p>
              <img src={fiestas} alt="fiestas" className={styles.fiestaLogo3} />
            </div>
            <h2 className={styles.title_events}>¡Es momento!</h2>
            <p className={styles.p_responsive}>Ahorra ahora y que mejor que en una
              alcancia diseñada con tu personaje favorito
              especialmente diseñado para ti. ¿Empezamos?.</p>
        </div>
        <div className={styles.cont_save_money}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>¿Por qué es importante ahorrar ?</h2>
            <p className={styles.text}>
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
      </div>

      <div className={styles.row}>
        <div className={styles.cont_save_children}>
          <div className={styles.imageContainer}>
            <img src={telefono} alt="telefono" className={styles.planLogo2} />
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
        <div className={styles.cont_save_for}>
          <div className={styles.textContainerSaveFor}>
            <h2 className={styles.title_save_for}>¿Para qué puedo ahorrar?</h2>
            <lu className={styles.lu_save_for}>
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
          <div className={styles.imageContainerSaveFor}>
            <img src={credito} alt="credito" className={styles.fiestaLogo4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;

