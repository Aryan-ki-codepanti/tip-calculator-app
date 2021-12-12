import React from 'react'
import "./TipButton.css";

export const TipButton = ({ percent }) => {

    const buttonActiveStyles = {
        backgroundColor: "var(--Strong-cyan)",
        color: "var(--Very-dark-cyan)"
    };

    return (
        <button className="tip-button" >
            {percent}%
        </button>
    )
}
