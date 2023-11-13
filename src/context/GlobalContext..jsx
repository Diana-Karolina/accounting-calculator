import { createContext, useContext, useReducer} from "react"
import AppReducer from './AppReducer'

export const Context = createContext()

export const useGlobalState = () => {
   const context = useContext(Context)
    return context
}

export const GlobalProvider = ({children}) => {

    const [state, setState] =  useReducer(AppReducer, [])

    return(
        <Context.Provider value={{state, setState}}>{children}
        </Context.Provider>
    )
};

