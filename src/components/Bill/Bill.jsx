import React from 'react'
import "./Bill.css";
import dollar from "../../images/icon-dollar.svg";

export const Bill = () => {
    return (
        <div className="bill">
            <h1> Bill </h1>
            <div>
                <img src={dollar} alt="dollar-sign" />
                <input type="text" />
            </div>
        </div>
    )
}
