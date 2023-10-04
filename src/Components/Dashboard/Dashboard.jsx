import style from '../Dashboard/Dashboard.module.css'
import { Add, ManageAccounts, PointOfSale, Settings, TrendingFlat, TrendingUpOutlined } from '@mui/icons-material';
import Estadisticas from "../Estadisticas/Estadisticas";
import Create from "../Create/Create"
import CreateCategorie from "../CreateCategorie/CreateCategorie";
import ProductosAdminActu from "../ProductosAdminActu/ProductosAdminActu"
import { useEffect, useState } from 'react';
import ProductosAdmin from '../ProductosAdmin/ProductosAdmin';
import ReporteVentas from '../ReporteVentas/ReporteVentas'
import TableUsers from '../tableUsers/TableUsers';
import { getUsers } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

const Dashboard = () => {

  const [activeButton, setActiveButton] = useState('Estadisticas')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers());
  }, []);

    return (
    <div className={style.dashboard}>
      <section>
        <ul>
          <li><p><Add></Add>PRODUCTOS</p>
            <ul>
              <li onClick={()=>setActiveButton('ActProducto')}><p>ACTUALIZAR PRODUCTO</p></li>
              <li onClick={()=>setActiveButton('Productos')}><p>CREAR PRODUCTO</p></li>
              <li onClick={()=>setActiveButton('categoria')}><p>CATEGORIAS</p></li>
              <li onClick={()=>setActiveButton('ElProducto')}><p>ELIMINAR PRODUCTO</p></li>
            </ul>
          </li>
          <li onClick={()=>setActiveButton('RepVentas')}><p><PointOfSale></PointOfSale>REPORTE DE VENTAS</p></li>
          <li onClick={()=>setActiveButton('Estadisticas')}><p><TrendingUpOutlined></TrendingUpOutlined>ESTADÍSTICAS</p></li>
          <li onClick={()=>setActiveButton('UserReg')}><p><ManageAccounts></ManageAccounts>USUARIOS REGISTRADOS</p></li>
        </ul>
      </section>
      <div className={style.container}>
      {activeButton === 'Estadisticas' && ( <Estadisticas/>)}
      {activeButton === 'Productos' && (<Create/>)}
      {activeButton === 'categoria' && (<CreateCategorie/>)}
      {activeButton === 'ActProducto' && (<ProductosAdminActu/>)}
      {activeButton === 'ElProducto' && (<ProductosAdmin/>)}
      {activeButton === 'RepVentas' && (<ReporteVentas/>)}
      {activeButton === 'UserReg' && (<TableUsers/>)}
      <article>
     
      </article>
     
      </div>

    </div>
  );
};

export default Dashboard;
