import React from 'react';
import { CalculatorInput } from '../CalculatorInput/CalculatorInput';
import { ResultDisplay } from '../ResultDisplay/ResultDisplay';
import "./CalculatorBox.css";

export const CalculatorBox = () => {
    return (
        <div className="wrapper">
            <div className="app__left">
                <CalculatorInput />
            </div>
            <div className="app__right">
                <ResultDisplay />
            </div>
        </div>
    )
};

