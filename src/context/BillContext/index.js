import { createContext, useState } from "react";


export const BillContext = createContext();

export const BillWrapper = ({ children }) => {
    
    const [billAmount, setBillAmount] = useState('');
    const [customTipPercent, setCustomTipPercent] = useState('');
    const [currentTipButton , setCurrentTipButton] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState('');

    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);


    const data = {
        billAmount,
        setBillAmount,
        customTipPercent,
        setCustomTipPercent,
        currentTipButton,
        setCurrentTipButton,
        numberOfPeople,
        setNumberOfPeople,
        total,
        tipAmount
    } 

    return(
        <BillContext.Provider value={data} >
            {children}
        </BillContext.Provider>
    )
};