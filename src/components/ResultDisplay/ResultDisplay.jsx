import React from "react";
import { useContext } from "react/cjs/react.development";
import { BillContext } from "../../context/BillContext";
import { AmountShow } from "../AmountShow/AmountShow";
import "./ResultDisplay.css";

export const ResultDisplay = () => {

    const { total , tipAmount } = useContext(BillContext);
    const disabled = true;
    return (
        <div className="result-wrapper">
            <div>
                <AmountShow title="tip amount" amount={tipAmount} />
                <AmountShow title="total" amount={total} />
            </div>
            <button onClick={() => console.log("Reset")} className="reset-button" disabled={disabled}>Reset</button>
        </div>
    );
};
