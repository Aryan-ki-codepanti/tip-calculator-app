import React from "react";
import dollar from "../../images/icon-dollar.svg";

export const AmountShow = ({ title, amount }) => {
    return (
        <div class="amount-box">
            <div className="amount-left">
                <p class="amount-title">{title}</p>
                <span class="amount-person">/ person</span>
            </div>
            <div className="amount-right">
                <h1 className="amount">
                    <img src={dollar} alt="" />
                    {amount}
                </h1>
            </div>
        </div>
    );
};
