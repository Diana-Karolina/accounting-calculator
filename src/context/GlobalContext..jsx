import { createContext, useContext, useReducer} from "react"
import AppReducer from './AppReducer'

const initState = {
    transactions: []
}

export const Context = createContext()

export const useGlobalState = () => {
   const context = useContext(Context)
    return context
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] =  useReducer(AppReducer, initState);


    // estas funcion servira para ver por consola la eliminacion de alguna transaction
    const deleteTransaction = () => {
        dispatch({
            type: 'ADD_TRANSATION',
            payload: transaction
        })
    };

    // estas funcion servira para ver por consola que se agrego alguna transaction
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSATION',
            payload: transaction
        })
    };

    return( 
        <Context.Provider 
        value={{
            transactions: state.transactions,
            addTransaction,
        }}
        >
        {children}
        </Context.Provider>
    )
};

