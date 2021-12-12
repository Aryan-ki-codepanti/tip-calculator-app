import React, { useContext } from "react";
import { BillContext } from "../../context/BillContext";
import "./TipButton.css";

export const TipButton = ({ percent }) => {
    const { currentTipButton, setCurrentTipButton, setCustomTipPercent } =
        useContext(BillContext);

    const buttonActiveStyles = {
        backgroundColor: "var(--Strong-cyan)",
        color: "var(--Very-dark-cyan)"
    };

    const handleTipChange = () => {
        setCustomTipPercent(prev => "");
        setCurrentTipButton(prev => percent);
    };

    return (
        <button
            onClick={handleTipChange}
            className="tip-button"
            style={currentTipButton === percent ? buttonActiveStyles : {}}
        >
            {percent}%
        </button>
    );
};
