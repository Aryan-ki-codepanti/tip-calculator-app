import React from "react";
import { AmountShow } from "../AmountShow/AmountShow";
import "./ResultDisplay.css";

export const ResultDisplay = () => {

    const disabled = true;
    return (
        <div className="result-wrapper">
            <div>
                <AmountShow title="tip amount" amount={0} />
                <AmountShow title="total" amount={0} />
            </div>
            <button onClick={() => console.log("Reset")} className="reset-button" disabled={disabled}>Reset</button>
        </div>
    );
};
