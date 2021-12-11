import React from 'react'
import logo from "../../images/logo.svg";
import "./Logo.css";

export const Logo = () => {
    return (
        <div className="logo-box">
            <img className="logo" src={logo} alt="logo-png" />
        </div>
    )
};
