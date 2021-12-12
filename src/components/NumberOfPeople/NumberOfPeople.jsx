import React from 'react'
import "./NumberOfPeople.css";
import person from "../../images/icon-person.svg";

export const NumberOfPeople = () => {

    const zeroError = false;
    const zeroErrorBorder = {
        borderColor: "var(--Error-state-color)"
    }

    return (
        <div className='number-of-people'>
            <div className='number-of-people-header'>
                <h1>Number Of People</h1>
                {zeroError && <h1 className='number-of-people-zero-error'>Can't be zero</h1>}
            </div>
            <div>
                <img src={person} alt="person-svg" />
                <input style={zeroError ? zeroErrorBorder : {}} type="text" placeholder='0'/>
            </div>
        </div>
    )
}
