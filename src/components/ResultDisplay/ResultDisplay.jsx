import React from "react";
import { AmountShow } from "../AmountShow/AmountShow";
import "./ResultDisplay.css";

export const ResultDisplay = () => {

    const resetActiveStyles = {
        backgroundColor: "var(--Strong-cyan)",
        color: "var(--Very-dark-cyan)"
    };

    return (
        <div className="result-wrapper">
            <div>
                <AmountShow title="tip amount" amount={0} />
                <AmountShow title="total" amount={0} />
            </div>
            <button className="reset-button">Reset</button>
        </div>
    );
};
