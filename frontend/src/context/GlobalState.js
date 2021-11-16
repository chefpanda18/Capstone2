import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    transactions: [
        {id: 1, text: 'flower', amount: -20 },
        {id: 2, text: 'cherry', amount: 300 },
        {id: 3, text: 'book', amount: -10 },
        {id: 4, text: 'camera', amount: 150 }
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{transactions:state.transactions}}>
        {children}
    </GlobalContext.Provider>)
}