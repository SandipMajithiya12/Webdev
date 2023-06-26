import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const intialState ={
    transactions :[
        {id :1, text:'flower',amount : 10} ,
        {id :2, text:'pen',amount : -10} ,
        {id :3, text:'wer',amount : 20} ,
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

    return(
        <GlobalContext.Provider value={{
            transactions : state.transactions,deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>

    )
}