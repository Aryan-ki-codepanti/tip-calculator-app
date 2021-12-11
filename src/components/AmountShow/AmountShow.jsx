import React from "react";
import dollar from "../../images/icon-dollar-cyan.svg";
import "./AmountShow.css";

export const AmountShow = ({ title, amount }) => {

    const getNum = num => Number(num).toFixed(2);

    return (
        <div className="amount-box">
            <div className="amount-left">
                <p className="amount-title">{title}</p>
                <p className="amount-person">/ person</p>
            </div>
            <div className="amount-right">
                <h1 className="amount">
                    <img src={dollar} alt="" />
                    {getNum(amount)}
                </h1>
            </div>
        </div>
    );
};
