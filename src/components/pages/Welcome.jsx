import React from "react";

export default function Welcome(props) {

    const { name, setName, handleWelcomeSubmit } = props;

    return (
        <>
            <div className="welcome-page-hero">
                <p>Welcome to the Lloyds Bank Mortgage Calculator. This easy-to-use tool helps you quickly estimate your monthly payments, explore different loan options, and understand what works best for your budget.</p>
            </div>

            <div className="welcome-page-input">
                <p>To get started, enter your name below and click the button to get started!</p>
                <input className="input-field" value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter your name..." />
                <button className="welcome-page-btn" onClick={handleWelcomeSubmit}>Get Started</button>
            </div>
        </>
    );
}
