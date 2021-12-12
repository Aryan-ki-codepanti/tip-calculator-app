import React from "react";
import { useContext } from "react/cjs/react.development";
import { BillContext } from "../../context/BillContext";
import { TipButton } from "../TipButton/TipButton";
import "./SelectTip.css";

export const SelectTip = () => {
    const { customTipPercent, setCustomTipPercent, setCurrentTipButton } =
        useContext(BillContext);

    const handleCustomTipPercentChange = e => {
        setCurrentTipButton(prev => null);
        setCustomTipPercent(prev => e.target.value);
    };
    return (
        <div className="select-tip">
            <h1>Select Tip</h1>
            <div className="tip-grid">
                <TipButton percent={5} />
                <TipButton percent={10} />
                <TipButton percent={15} />
                <TipButton percent={25} />
                <TipButton percent={50} />
                <input
                    type="text"
                    value={customTipPercent}
                    placeholder="Custom"
                    onChange={handleCustomTipPercentChange}
                />
            </div>
        </div>
    );
};
