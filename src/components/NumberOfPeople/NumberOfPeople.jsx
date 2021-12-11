import React from 'react'
import "./NumberOfPeople.css";
import person from "../../images/icon-person.svg";

export const NumberOfPeople = () => {
    return (
        <div className='number-of-people'>
            <h1>Number Of People</h1>
            <div>
                <img src={person} alt="" />
                <input type="text" />
            </div>
        </div>
    )
}
