import logo from "./logo_whatsapp.png"
import styles from "./whatsappBar.module.css";

const WhatsappBar = () => {
    return (
        <div className={styles.cont}>
            <a href="https://wa.me/message/TNARBJHH3ZXGJ1" target="_blank" rel="noreferrer" className={styles.button}>
                <img className={styles.img} src={logo} alt="Whatsapp" />
            </a>
        </div>
    );
};

export default WhatsappBar;