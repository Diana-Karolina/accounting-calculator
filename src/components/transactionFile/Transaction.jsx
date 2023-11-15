import { useState } from "react"
import {useGlobalState} from '../../context/GlobalContext.'

function Transaction () {
    
    //este estado servira para
    const {addTransaction} = useGlobalState()

    //este estado sirve para añadir los ingresos y gastos
    const [description,setDescription] = useState()

    //este estado servira para colocar el monto
    const [amount, setAmount] = useState(0)

    //esta funcion servira para que al precionar el button , se vaya al evento del form
    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            ide:window.crypto.randomUUID(),
            description,
            amount
        })
        console.log(description, amount)
    };


    return(
        <div>    
            <form onSubmit={onSubmit}>
            
            <input 
            type="text" 
            placeholder="Escriba un texto"
            onChange={(e) => setDescription (e.target.value)} 
            />
          
            <input 
            type="number" 
            step="0.01" placeholder="00.00" 
             onChange={(e) => setAmount(e.target.value)}
            />

            <button>
                Añadir Transaccion
            </button>
        </form>

        </div>
    )
}

export default Transaction