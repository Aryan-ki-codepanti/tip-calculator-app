import { createContext, useEffect, useState } from "react";


export const BillContext = createContext();

export const BillWrapper = ({ children }) => {
    
    const [billAmount, setBillAmount] = useState('');
    const [customTipPercent, setCustomTipPercent] = useState('');
    const [currentTipButton , setCurrentTipButton] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState('');

    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (currentTipButton != null && numberOfPeople !== ''){
            const tip = Number(billAmount) * currentTipButton / 100;
            const numPeople = Number(numberOfPeople);
            const tipPerPerson = tip / numPeople;
            const totalPerPerson = (tip+Number(billAmount))/numPeople;
            setTipAmount(prev => tipPerPerson);
            setTotal(prev => totalPerPerson);
        }
        else if (customTipPercent !== '' && numberOfPeople !== ''){
            const tip = Number(billAmount) * Number(customTipPercent) / 100;
            const numPeople = Number(numberOfPeople);
            const tipPerPerson = tip / numPeople;
            const totalPerPerson = (tip+Number(billAmount))/numPeople;
            setTipAmount(prev => tipPerPerson);
            setTotal(prev => totalPerPerson);
        }
    } , [ currentTipButton , customTipPercent , billAmount , numberOfPeople ]);

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