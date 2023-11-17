import {useGlobalState} from "../context/GlobalContext."


function Balance () {
    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)

    const totalAmounts = amounts.reduce((acc, item) => (acc += item),0)

    return(
        <div className="flex justify-between">
            <h3>Analisis contable</h3>
            <h1 className="text-2x1 font-bold">${totalAmounts}</h1>
        </div>
    );
}
export default Balance;