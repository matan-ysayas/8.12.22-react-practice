import { createContext,useReducer } from "react";
import { massageReducer } from "../reducers/massage-reducer";
export const massageContext=createContext();



const MassageProvider=({children})=>{
    const [massage,dispatch]=useReducer(massageReducer,{isOpen:false})
    return(
        <massageContext.Provider value={{massage,dispatch}}>
            {children}

        </massageContext.Provider>
    )
}
export default MassageProvider;