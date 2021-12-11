import React from 'react'
import { TipButton } from '../TipButton/TipButton';
import "./SelectTip.css";

export const SelectTip = () => {
    return (
        <div className="select-tip">
            <h1>Select Tip</h1>
            <div className="tip-grid">
                <TipButton percent={5}/>
                <TipButton percent={10}/>
                <TipButton percent={15}/>
                <TipButton percent={25}/>
                <TipButton percent={50}/>
                <input type="text" placeholder='Custom' />
            </div>
        </div>
    )
}
