import {useGlobalState} from '../../context/GlobalContext.'

function ListTransaction () {
    const {transactions, deleteTransaction} = useGlobalState()

    return(
        <div>{
            transactions.map(transaction => (
                <div key={transaction.id}>
                    <p>{transaction.description}</p>
                    <span>{transaction.amount}</span>
                    <button onClick={() => {
                        deleteTransaction(transaction.id)
                    }}>
                        Eliminar transaccion
                    </button>
                </div>
            ))
            }</div>
    )
}


export default ListTransaction;