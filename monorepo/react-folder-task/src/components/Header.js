import React from "react";

const Header = ({ currentStep, totalSteps }) => {
    return (
        <header>
            <h1>Choose Service</h1>
            <h2>Step {currentStep}/{totalSteps}</h2>
        </header>
    );
}

export default Header;