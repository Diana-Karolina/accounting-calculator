import React from 'react'
import {VictoryPie,VictoryLabel} from 'victory';
import { useGlobalState } from '../context/GlobalContext.';


function GastosRegister() {
 const {transactions} = useGlobalState()

const totalIngre = transactions
.filter((transaction) => transaction.amount > 0)
.reduce((acc, transaction) => (acc += transaction.amount), 0);
 
const totalGasto = transactions
.filter((transaction) => transaction.amount < 0)
.reduce((acc, transaction) => (acc += transaction.amount), 0) * -1; 
    
const porcentajeGastos = Math.round((totalGasto / totalIngre) * 100);    
 
const porcentajeIngresos = 100 - porcentajeGastos;



    return (
    <VictoryPie
    colorScale={["#41B8D5","#2D8BBA","#2D8BBA"]}
      data={[
        { x: 'Gastos', y: porcentajeGastos},
        { x: 'Ingresos', y: porcentajeIngresos},
      ]} 
      animate={{
        duration: 200
      }}

      labels={({ datum }) => `${datum.y}%`}

      labelComponent={<VictoryLabel
      angle={45}
      style={{
        fill:'white'
      }}
      />}
    />
  );
}

export default GastosRegister