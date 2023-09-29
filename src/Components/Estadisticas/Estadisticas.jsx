import Graficos from '../Graficos/Graficos'
import style from '../Estadisticas/Estadisticas.module.css'
import { useState } from 'react';


const Estadisticas= () => {

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
                <div>Ventas del día<h2>$114000</h2>
                </div>
                <h3>%45
                {barra('45', '#2c1ac8')}
                </h3>
            </span>
            <span onClick={() => setActiveGraph('ventasDia')} style={{background: '#9e15ad96'}}>
                <div>Ventas Totales<h2>$114000</h2>
                </div>
                <h3>%15
                {barra('15', 'blueviolet')}
                </h3>
            </span>
            <span style={{background: '#d1dc72b4'}}>
                <div>Ordenes totales<h2>$114000</h2>
                </div>
                <h3>%24
                {barra('24', 'yellow')}
                </h3>
            </span>
            <span style={{background: '#60d8e0b4'}}>
                <div>Clientes Totales<h2>$114000</h2>
                </div>
                <h3>%88
                {barra('88', 'blue')}
                </h3>
            </span>
        </div>

      <div className={style.graficos}>
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

export default Estadisticas;
