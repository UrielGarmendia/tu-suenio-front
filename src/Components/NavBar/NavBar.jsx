import style from '../NavBar/NavBar.module.css'
import logo from '../../Assents/logoPrincipal.png'
import logoUser from '../../Assents/logoUser.png'
import carrito from '../../Assents/carrito.png'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { allAlcancias } from '../../redux/actions'

const NavBar = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/login`);
  };

  const handleClick = () => {
    dispatch(allAlcancias());
  }

    return(
      <div className={style.navBar}>
        <div><img src={logo} alt="logo" height='100px'/></div>
        <div className={style.botones}>
          <div>
            <Link to='/'><button>INICIO</button></Link>
            <Link to='/create'><button>CREAR ALCANCIA</button></Link>
            <Link to='/alcancias'><button onClick={handleClick}>ALCANCIAS</button></Link>        
            <button>EMPRESA</button>
            <button>CONTACTANOS</button>
          </div>
        </div>
        <SearchBar/>
        <div className={style.signin}>
          <img src={carrito} alt="carrito" />
        <img src={logoUser} alt="icono user"></img>
          <button onClick={handleNavigate}>Iniciar sesion</button>
        </div>
    </div>
   )
   }

   export default NavBar