import { useState } from "react";
import {useGlobalState} from '../../context/GlobalContext.';

function TransactionForm () {
    
    //este estado servira para
    const {addTransaction} = useGlobalState();

    //este estado sirve para añadir los ingresos y gastos
    const [description,setDescription] = useState("");

    //este estado servira para colocar el monto
    const [amount, setAmount] = useState(0);

    //esta funcion servira para que al precionar el button , se vaya al evento del form
    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id:window.crypto.randomUUID(),
            description,
            amount: +amount,
        })
        setAmount(0);
        setDescription("");
    };


    return(
        <div>    
            <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Escriba un texto"
            onChange={(e) => setDescription (e.target.value)} 
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg
            block mb-2 w-full"
            value={description}
            />
          
            <input 
            type="number" 
            step="0.01" 
            placeholder="00.00" 
            onChange={(e) => setAmount(e.target.value)}
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg
            block mb-2 w-full"
            value={amount}
            />

            <button className="bg-indigo-700 text-white px-3
            py-2 rounded-lg block mb-2 w-full"> Añadir Transaccion
            </button>
        </form>

        </div>
    )
}

export default TransactionForm;