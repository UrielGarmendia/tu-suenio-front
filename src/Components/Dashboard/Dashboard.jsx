import Graficos from '../Graficos/Graficos'
import style from '../Dashboard/Dashboard.module.css'
import { useState } from 'react';


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
        <div>DASHBOARD</div>
        <div>ANALYTICS
          <h3>Estadísticas</h3>
        </div>
        <div>SUPPORT
          <h3>Tickets</h3>
          <h3>Clientes</h3>
        </div>
        <div>SHOP
          <h3>Productos</h3>
          <h3>Ordenes</h3>
          <h3>Reportes</h3>
        </div>
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
