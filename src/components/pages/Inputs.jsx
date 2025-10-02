import React, { useState } from "react";
import Input from "../Input";

export default function Inputs() {

    return (
        <div className="inputs-page">
            <h2>Mortgage Inputs</h2>
            <form>
                <Input
                    label="Home Price (£)"
                    type="number"
                    placeholder="Enter home price"
                    id="homePrice"
                />
                <Input
                    label="Down Payment (£)"
                    type="number"
                    placeholder="Enter down payment amount"
                    id="downPayment"
                />
                <Input
                    label="Loan Term (years)"
                    type="number"
                    placeholder="Enter loan term in years"
                    id="loanTerm"
                />
                <Input
                    label="Interest Rate (%)"
                    type="number"
                    placeholder="Enter interest rate"
                    id="interestRate"
                />
                <button type="submit">Calculate Mortgage</button>
            </form>
        </div>
    );
}
