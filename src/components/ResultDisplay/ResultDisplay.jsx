import React , { useContext } from "react";
import { BillContext } from "../../context/BillContext";
import { AmountShow } from "../AmountShow/AmountShow";
import "./ResultDisplay.css";

export const ResultDisplay = () => {
    const {
        setBillAmount,
        setCustomTipPercent,
        setCurrentTipButton,
        setNumberOfPeople,
        setTotal,
        setTipAmount,
        total,
        tipAmount,
        billAmount,
        numberOfPeople,
        currentTipButton,
        customTipPercent
    } = useContext(BillContext);

    const handleReset = () => {
        setBillAmount(prev => "");
        setCustomTipPercent(prev => "");
        setNumberOfPeople(prev => "");
        setCurrentTipButton(prev => null);
        setTotal(prev => 0);
        setTipAmount(prev => 0);
    };

    const disabled =
        billAmount === "" &&
        numberOfPeople === "" &&
        currentTipButton === null &&
        customTipPercent === "";
    return (
        <div className="result-wrapper">
            <div>
                <AmountShow title="tip amount" amount={tipAmount} />
                <AmountShow title="total" amount={total} />
            </div>
            <button
                onClick={handleReset}
                className="reset-button"
                disabled={disabled}
            >
                Reset
            </button>
        </div>
    );
};
