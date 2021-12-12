import React, { useContext } from "react";
import "./Bill.css";
import dollar from "../../images/icon-dollar.svg";
import { BillContext } from "../../context/BillContext";

export const Bill = () => {
    const { billAmount, setBillAmount } = useContext(BillContext);

    return (
        <div className="bill">
            <h1> Bill </h1>
            <div>
                <img src={dollar} alt="dollar-sign" />
                <input
                    type="text"
                    placeholder="0"
                    value={billAmount}
                    onChange={e =>
                        setBillAmount(prev => e.target.value)
                    }
                />
            </div>
        </div>
    );
};
