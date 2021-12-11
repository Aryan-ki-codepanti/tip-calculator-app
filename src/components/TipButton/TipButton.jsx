import React from 'react'
import "./TipButton.css";

export const TipButton = ({ percent }) => {
    return (
        <button className="tip-button">
            {percent}%
        </button>
    )
}
