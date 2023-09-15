import React from 'react'
import styles from './Landing.module.css'
import pageLogo from './pageLogo.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Landing = () => {
    return (
        <form className={styles.principalContainer} >
            <ArrowBackIcon className={styles.iconBack} onClick={() => window.history.back()} fontSize='large'/>
            <div className={styles.containerForm}>
                <h1>LOGIN</h1>
                <span>Las Mejores Alcancias y recordatorios personalizados</span>
                <input placeholder='Email...'/>
                <input placeholder='Contraseña...'/>
                <a href='/'>Olvidaste tu contraseña?</a>
                <button>Entrar</button>
                <span>No tienes cuenta aún?</span>
                <a>Regístrate</a>
                <span>o</span>
                <button>Continua con Google</button>
            </div>
            <div className={styles.containerPageLogo} >
                <img src={pageLogo} alt='pageLogo' className={styles.pageLogo}/>
            </div>
        </form>
    )
}

export default Landing