import styles from "./About.module.css";
import familia from "./familia.jpg"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTex}>
      <section>
        <h1>Bienvenidos a tu sueño alcancías</h1>
        <p>
          Somos una empresa colombiana dedicada a la decoración de alcancías
          personalizadas con enfoque en diferentes estilos, con el objetivo de
          implementar un plan de ahorro que ayude al alcance de tu sueño.
        </p>
        <p>
          Iniciamos en 2020 tras el paso de la indeseable pandemia del Covid-19,
          donde vimos la necesidad de generar un ingreso adicional en casa.
          Nos encanta el arte en diferentes perspectivas, y un día mi hija
          recibió un regalo que sería el inicio de nuestro hermoso
          emprendimiento: una alcancía personalizada. Con la alcancía en casa y
          la excelente atención en los detalles de mi hija, nos dimos cuenta de
          que el personaje estaba incompleto, así que juntas lo completamos.
        </p>
        <p>
          El día de su cumpleaños colocamos la alcancía como parte de la
          decoración, y adivinen, fue el centro de atención. Así que me tomé el
          tiempo de investigar, estudiar y practicar, dando mis primeras alcancías
          como obsequios en cumpleaños de familiares y amigos. Empecé a generar
          curiosidad y demanda por las mismas personas a las que les obsequié las
          alcancías. Creamos una página en Instagram y comenzamos la empresa de
          manera virtual. Al día de hoy, hemos vendido más de 1.500 alcancías en
          diferentes lugares de Colombia, y también nos internacionalizamos. No
          solo vendemos por unidad, sino que también realizamos ventas al por
          mayor para sorpresas o souvenirs en todo tipo de eventos. Solo puedo dar
          gracias a todas las personas que han confiado en nuestro trabajo y a mi
          familia por todo su apoyo.
        </p>
      </section>

      <section>
        <h1>Misión</h1>
        <p>
          Nuestra misión es implementar en la cultura familiar el buen hábito del
          ahorro.
        </p>
      </section>

      <section>
        <h1>Visión</h1>
        <p>
          Nuestra visión es convertirnos en símbolo de ahorro en la cultura
          colombiana y generar empleo, especialmente en madres cabeza de familia.
        </p>
      </section>
      </div>
      <img src={familia} alt="familia" className={styles.familia} />
    </div>
  );
};

export default About;