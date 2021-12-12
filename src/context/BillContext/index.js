import { createContext } from "react";


export const BillContext = createContext();

export const BillWrapper = ({ children }) => {
    


    const data = {
        name: "Aryan"
    } 

    return(
        <BillContext.Provider value={data} >
            {children}
        </BillContext.Provider>
    )
};