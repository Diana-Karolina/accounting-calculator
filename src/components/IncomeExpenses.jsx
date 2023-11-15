import {useGlobalState} from "../context/GlobalContext."


function IncomeExpenses() {

    const {transactions} = useGlobalState();
    
    const amounts = transactions.map((transaction) => transaction.amount);
    
    const ingresosAmount = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <>
    <div>
        <h4>Mis Ingresos</h4>
        <p>{ingresosAmount}</p>
    </div>
    <div>
        <h4>Mis Gastos</h4>
        <p>{1500}</p>
    </div>
    </>
  )
}

export default IncomeExpenses