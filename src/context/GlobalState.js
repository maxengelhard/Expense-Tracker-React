import React , {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
// Initial State
const initialState = {
    transactions: [{
        id: 1, text: 'Flower', amount: -20
    }]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}</GlobalContext.Provider>);
}