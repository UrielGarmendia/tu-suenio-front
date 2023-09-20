import Graficos from '../Graficos/Graficos'
import style from '../Dashboard/Dashboard.module.css'
import { useState } from 'react';
import { Add, ManageAccounts, PointOfSale, Settings, TrendingFlat, TrendingUpOutlined } from '@mui/icons-material';


const Dashboard = () => {

  const [activeGraph, setActiveGraph] = useState('ventasDia');

  const data1 = [
    ['Venta de producto', 'Cantidad'],
    ['Alcancias pequeñas',  40],
    ['Alcancias medianas',  10],
    ['Alcancias grandes',  20]
  ];
  const options1 = {
    title: "Ventas del día",
    is3D: true,
    legend: { position: 'left' }
  };

  const data2 = [
    ['Mes', 'Julio','Agosto', 'Septiembre'],
    ['Alcancias pequeñas',  400, 1000,      400],
    ['Alcancias medianas',  200, 1170,      460],
    ['Alcancias grandes',  400, 660,       1120],
  ];
  const options2 = {
    title: "Ventas del mes",
    curveType: 'function',
    legend: { position: 'rigth' }
  };


    return (
    <div className={style.dashboard}>
      <section>
        <ul>
          <li><p><Add></Add>PRODUCTOS</p>
            <ul>
              <li><p>ACTUALIZAR PRODUCTO</p></li>
              <li><p>CREAR PRODUCTO</p></li>
              <li><p>ELIMINAR PRODUCTO</p></li>
            </ul>
          </li>
          <li><p><PointOfSale></PointOfSale>REPORTE DE VENTAS</p></li>
          <li><p><TrendingUpOutlined></TrendingUpOutlined>GRAFICOS</p></li>
          <li><p><ManageAccounts></ManageAccounts>USUARIOS REGISTRADOS</p></li>
          <li><p><Settings></Settings>CONFIGURACION DE PERFIL</p></li>
        </ul>
      </section>
      <div className={style.graficos}>
        <div className={style.ventas}>
          <span onClick={() => setActiveGraph('ventasTotales')}><div>Ventas Totales<p>$114000</p></div><div>%45</div></span>
          <span onClick={() => setActiveGraph('ventasDia')}><div>Ventas del día<p>$114000</p></div><div>%45</div></span>
          <span><div>Ordenes Totales<p>$114000</p></div><div>%45</div></span>
          <span><div>Clientes Totales<p>$114000</p></div><div>%45</div></span>
        </div>

      <div>
        {activeGraph === 'ventasDia' && (
            <Graficos type="PieChart" options={options1} data={data1} />
          )}
          {activeGraph === 'ventasTotales' && (
            <Graficos type="LineChart" options={options2} data={data2} />
        )}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
