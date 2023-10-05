import Graficos from '../Graficos/Graficos'
import style from '../Estadisticas/Estadisticas.module.css'
import { useState } from 'react';


const Estadisticas= () => {

  const [activeGraph, setActiveGraph] = useState('ventasDia');

  const data1 = [
    ['Venta de producto', 'Cantidad', { role: 'style' }],
    ['Alcancias chiquitinas',  10, 'green'],
    ['Alcancias pequeñas',  10, 'bluviolet'],
    ['Alcancias medianas',  5, 'yellow'],
    ['Alcancias grandes',  8, 'red']
  ];
  const options1 = {
    title: "Ventas del día",
    is3D: true,
    legend: { position: 'left' }
  };

  const data2 = [
    ['Mes', 'Julio','Agosto', 'Septiembre', 'Octubre'],
    ['Alcancias chiquitinas',  100, 150, 200, 180],
    ['Alcancias pequeñas',  100, 150, 160, 100],
    ['Alcancias medianas',  50, 100, 90, 115],
    ['Alcancias grandes',  40, 60, 70, 120],
  ];
  const options2 = {
    title: "Ventas del mes",
    curveType: 'function',
    legend: { position: 'rigth' }
  };

  const data3 = [
    ['Mes', 'Ordenes', 'Ventas'],
    ['Julio',  1000,      400],
    ['Agosto',  1170,      460],
    ['Septiembre',  660,       1120],
    ['Octubre',  1030,      540]
  ];
  const options3 = {
    title: "Ordenes totales",
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  const data4 = [
    ['Usuario', 'precio total', { role: 'style' }],
    ['Copper', 8.94, '#b87333'],          
    ['Silver', 10.49, 'silver'],           
    ['Gold', 19.30, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2' ],
  ];
  const options4 = {
    title: "Clientes Totales",
    is3D: true,
    legend: { position: 'rigth' }
  };

  function barra(propiedad, color) {
    const barraColor = color || '#4CAF50'
    return (
        <p className={style.barra}>
        <p
          className={style.nivelBarra}
          style={{ width: `${(propiedad/100) * 100}%`, background: barraColor }}
        ></p>
      </p>
    )
  }

    return (
    <div className={style.estadisticas}>
      <div>
        <div className={style.ventas}>
            <span onClick={() => setActiveGraph('ventasTotales')} style={{background: '#728edcb4'}}>
                <div>Ventas del día<h2>$125400</h2>
                </div>
                <h3>%45
                {barra('45', '#2c1ac8')}
                </h3>
            </span>
            <span onClick={() => setActiveGraph('ventasDia')} style={{background: '#9e15ad96'}}>
                <div>Ventas Totales<h2>$1140000</h2>
                </div>
                <h3>%15
                {barra('15', 'blueviolet')}
                </h3>
            </span>
            <span onClick={() => setActiveGraph('OrdenesTotales')} style={{background: '#d1dc72b4'}}>
                <div>Ordenes totales<h2>200</h2>
                </div>
                <h3>%24
                {barra('24', 'yellow')}
                </h3>
            </span>
            <span onClick={() => setActiveGraph('ClientesTotales')}style={{background: '#60d8e0b4'}}>
                <div>Clientes Totales<h2>400</h2>
                </div>
                <h3>%88
                {barra('88', 'blue')}
                </h3>
            </span>
        </div>

      <div className={style.graficos}>
        {activeGraph === 'ventasDia' && (
            <Graficos type="BarChart" options={options2} data={data2} />
          )}
        {activeGraph === 'ventasTotales' && (
            <Graficos type="ColumnChart" options={options1} data={data1} />
        )}
        {activeGraph === 'OrdenesTotales' && (
              <Graficos type="LineChart" options={options3} data={data3} />
          )}
        {activeGraph === 'ClientesTotales' && (
            <Graficos type="PieChart" options={options4} data={data4} />
        )}
      </div>
      </div>
    </div>
  );
};

export default Estadisticas;
