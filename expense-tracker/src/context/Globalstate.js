import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const intialState ={
    transactions :[
        
    ]
}
export const GlobalContext = createContext(intialState);
//provider compoment
export const GlobalProvider =({children})=>{
    const [state,dispatch] = useReducer(AppReducer,intialState);
    //actions
    function deleteTransaction(id){
        dispatch({
            type :'DELETE_TRANSACTION',
            payload : id
        });
    }
    function addTransaction(transactions){
        dispatch({
            type :'ADD_TRANSACTION',
            payload : transactions
        });
    }
    return(
        <GlobalContext.Provider value={{
            transactions : state.transactions,deleteTransaction,addTransaction
        }}>
            {children}
        </GlobalContext.Provider>

    )
}