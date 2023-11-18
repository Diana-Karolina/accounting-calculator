import {useGlobalState} from '../../context/GlobalContext.';
import {ItemTransaction} from './ItemTransaction';

function ListTransaction () {
    const {transactions} = useGlobalState();

    return(
    <>
    <h3 className='text-slate-300 text-xl font-bold w-full'>History</h3>
    
    <ul className='bg-red-500 w-full'>
        {transactions.map((transaction) => (
          <ItemTransaction transaction={transaction} key={transaction.id}/>
        ))}
    </ul>
    </>
    );
}


export default ListTransaction;