import {useGlobalState} from '../../context/GlobalContext.'
import {ItemTransaction} from '../transactionFile/ItemTransaction'

function ListTransaction () {
    const {transactions} = useGlobalState();

    return(
    <>
    <h3 className='text-slate-300 text-xl font-bold w-full'>History</h3>
    <ul>
        {transactions.map((transaction) => (
          <ItemTransaction transaction={transaction} key={transaction.id}/>
        ))}
    </ul>
    </>
    )
}


export default ListTransaction;