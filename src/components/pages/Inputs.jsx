
import React, { useState } from "react";
import { mortgageTerms } from "../../utils/mortgageTerms";

export default function Inputs() {
    const [formData, setFormData] = useState({
        homePrice: "",
        downPayment: "",
        loanTerm: "",
        interestRate: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="homePrice"
                value={formData.homePrice}
                onChange={handleChange}
            />
            <input
                name="downPayment"
                value={formData.downPayment}
                onChange={handleChange}
            />
            <input
                name="loanTerm"
                value={formData.loanTerm}
                onChange={handleChange}
            />
            <input
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
