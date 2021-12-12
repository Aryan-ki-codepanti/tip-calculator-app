import React, { useContext, useState } from "react";
import "./NumberOfPeople.css";
import person from "../../images/icon-person.svg";
import { BillContext } from "../../context/BillContext";

export const NumberOfPeople = () => {
    const { numberOfPeople, setNumberOfPeople } = useContext(BillContext);
    const [zeroError, setZeroError] = useState(false);

    const handlePeopleChange = e => {
        if (e.target.value && Number(e.target.value) === 0){
            setZeroError(prev => true);
        }
        else{
            setZeroError(prev => false);
            setNumberOfPeople(prev => e.target.value);
        }
    };

    const zeroErrorBorder = {
        borderColor: "var(--Error-state-color)"
    };

    return (
        <div className="number-of-people">
            <div className="number-of-people-header">
                <h1>Number Of People</h1>
                {zeroError && (
                    <h1 className="number-of-people-zero-error">
                        Can't be zero
                    </h1>
                )}
            </div>
            <div>
                <img src={person} alt="person-svg" />
                <input
                    style={zeroError ? zeroErrorBorder : {}}
                    type="text"
                    placeholder="0"
                    value={numberOfPeople}
                    onChange={handlePeopleChange}
                />
            </div>
        </div>
    );
};
