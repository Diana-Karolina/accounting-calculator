import { createContext, useContext, useReducer, useEffect} from "react"
import AppReducer from './AppReducer';

const initState = {
    transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
   const context = useContext(Context);
    return context;
};

export const GlobalProvider = ({children}) => {
    const [state, dispatch] =  useReducer(AppReducer, initState,
        () => {
            const localData = localStorage.getItem('transactions');
            
           return localData? JSON.parse(localData) : initState;
        });
    
    //Servira para guardar informacion la cual se la asigne
    useEffect(()=> {
        localStorage.setItem('transactions', JSON.stringify(state))
    },[state])    


    // estas funcion servira para ver por consola que se agrego alguna transaction
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    };


    // estas funcion servira para ver por consola la eliminacion de alguna transaction
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    };

    return( 
        <Context.Provider 
        value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
        }}
        >
        {children}
        </Context.Provider>
    );
};

