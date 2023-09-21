
import styles from "../Home/Home.module.css"
import fiestas from "./fiesta.png"
import plan from "./plan.png"
// import dequesirve from "./dequesirve.png"
import gafas from "./gafas.png"
import telefono from "./telefono.png"
import credito from "./credito.png"
import mujer from "./mujer.png"
import plandeahorro from "./plan de ahorro.jpg"
import Slide from "../Slide/Slide"
import cerdos from "./cerdos.png"
import whatsapp from "../../Assents/WhatsApp.png";


 const home = () => {







    return (
      <div className={styles.principal}>
          <Slide />
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={cerdos} alt="cerdos" className={styles.cerdos} />
          </div>
          <div className={styles.textcerditos}>
            <h2>¿Que tamaños tenemos?</h2>
            <p>
          estamos en mantenimiento
          
            </p>
            <div className={styles.masinfo}>
              <p>mas informacion</p>
            <a  href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img  className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
            </div>
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
            <div className={styles.informacion1}>
            <p>mas informacion</p>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={fiestas} alt="fiestas" className={styles.fiestaLogo} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={ plan} alt=" plan" className={styles.planLogo} />
          </div>
          <div className={styles.textContainer}>
            <h2>¿Por qué es importante tener un plan de ahorro ?</h2>
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
            <div className={styles.informacion2}>
            <p>mas informacion</p>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
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

            <div className={styles.informacion1}>
            <p>mas informacion</p>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
            </div>
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
            <h2>¿No sé que mas preguntar ?</h2>
            <p>
            Un plan de ahorro te impulsa a ser disciplinado con tus finanzas personales.
             Al asignar una parte de tus ingresos para el ahorro de manera regular, desarrollas
              hábitos financieros saludables y evitas el gasto excesivo; Ahorrar según un plan te
               brinda seguridad financiera. Sabes que tienes recursos disponibles para lidiar 
              con imprevistos y para alcanzar tus metas financieras a largo plazo. Esto reduce
               el estrés relacionado con las preocupaciones financieras.
            </p>
            <div className={styles.informacion}>
            <p>mas informacion</p>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h2>¿No sé que mas preguntar?</h2>
            <p>
              Nuestras alcancías sirven para cualquier tipo de evento, ya que
              puedes personalizarlas a tu gusto y usarlas como por ejemplo:
              recordatorios en bodas, fiestas infantiles, prácticamente para lo
              que quieras.
            </p>
            <div className={styles.informacion1}>
            <p>mas informacion</p>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={credito} alt="credito" className={styles.fiestaLogo} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={mujer} alt="mujer" className={styles.planLogo} />
          </div>
          <div className={styles.textContainer}>
            <h2>¿No sé que mas preguntar ?</h2>
            <p>
            Un plan de ahorro te impulsa a ser disciplinado con tus finanzas personales.
             Al asignar una parte de tus ingresos para el ahorro de manera regular, desarrollas
              hábitos financieros saludables y evitas el gasto excesivo; Ahorrar según un plan te
               brinda seguridad financiera. Sabes que tienes recursos disponibles para lidiar 
              con imprevistos y para alcanzar tus metas financieras a largo plazo. Esto reduce
               el estrés relacionado con las preocupaciones financieras.
            </p>
            <div className={styles.informacion}>
              <p>mas informacion</p>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer">
                  <img  className={styles.whatsapp} src={whatsapp} href="" alt="" />
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default home