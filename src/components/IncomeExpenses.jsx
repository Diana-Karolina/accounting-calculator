import {useGlobalState} from "../context/GlobalContext."


function IncomeExpenses() {

    const {transactions} = useGlobalState();
    
    const amounts = transactions.map((transaction) => transaction.amount);
    
    //esta funcion sirve para ver los montos en positivos
    const ingresosAmount = amounts
    .filter((item)=> item > 0)
    .reduce((acc, item) => (acc += item), 0);


    //esta funcion sirve para ver los montos en positivos
    const egresosAmount = amounts
    .filter((item)=> item <0)
    .reduce((acc,item) => acc += item , 0) * -1;

    return (
    <>
    <div>
        <h4>Mis Ingresos</h4>
        <p>{ingresosAmount}</p>
    </div>
    <div>
        <h4>Mis Gastos</h4>
        <p>{egresosAmount}</p>
    </div>
    </>
  )
}

export default IncomeExpenses