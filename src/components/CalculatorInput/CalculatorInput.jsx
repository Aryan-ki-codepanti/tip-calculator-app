import React from 'react'
import "./CalculatorInput.css";
import { Bill } from '../Bill/Bill';
import { NumberOfPeople } from "../NumberOfPeople/NumberOfPeople";
import { SelectTip } from "../SelectTip/SelectTip";

export const CalculatorInput = () => {
    return (
        <div className='calculator-input'>
            <div className="bill-box">
                <Bill />
            </div>
            <div className="select-tip">
                <SelectTip />
            </div>
            <div className="number-of-people">
                <NumberOfPeople />
            </div>
        </div>
    )
}
