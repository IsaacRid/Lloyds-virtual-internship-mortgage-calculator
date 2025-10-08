
import React, { useState } from "react";
import Input from "../Input";

export default function Inputs(props) {
    const { handleInputSubmit, homePrice, setHomePrice, downPayment, setDownPayment, loanTerm, setLoanTerm, interestRate, setInterestRate, name } = props;

    return (
        <>
            <div className="inputs-page-hero">
                <p>Welcome {name}, this is the inputs page. Here, you can enter your mortgage details to calculate your monthly payments and other important information.</p>
            </div>

            <form className="inputs-form" onSubmit={handleInputSubmit}>
                <div className="input-group">
                    <Input title="Home Price (£)" name="homePrice" value={homePrice} onChange={(event) => setHomePrice(event.target.value)} placeholder="Enter home price..." />
                </div>
                <div className="input-group">
                    <Input title="Down Payment (£)" name="downPayment" value={downPayment} onChange={(event) => setDownPayment(event.target.value)} placeholder="Enter down payment..." />
                </div>
                <div className="input-group">
                    <Input title="Loan Term (years)" name="loanTerm" value={loanTerm} onChange={(event) => setLoanTerm(event.target.value)} placeholder="Enter loan term..." />
                </div>
                <div className="input-group">
                    <Input title="Interest Rate (%)" name="interestRate" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} placeholder="Enter interest rate..." />
                </div>
                <button className="inputs-submit-btn" type="submit">
                    <i className="fa-solid fa-arrow-right"></i> Calculate
                </button>
            </form>
        </>
    );
}
