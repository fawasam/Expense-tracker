import React,{useReducer,createContext } from "react"
import AppReducer from "./AppReducer"

const initialState= {
    transaction:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}


export const GlobalContext =createContext(initialState)

//provider

export const GlobalProvider =({children})=>{
    const [state,dispatch] =useReducer(AppReducer,initialState)
    //actions
    function deleteTrans(id){
        dispatch({
            type:"DELETE",
            payload:id
        })
    }
    function addTrans(transaction){
        dispatch({
            type:"ADD_TRANS",
            payload:transaction
        })
    }
    return ( 
    <GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteTrans,
        addTrans
        }}>
         {children}
    </GlobalContext.Provider>)
}