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
    const [state, di] =  useReducer(AppReducer, initState);

    // estas funcion servira para ver por consola que se agrego alguna transaction
    const addTransaction = (description,amount) => {
        console.log('addTransaction');
    }

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

