import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Welcome from "./components/pages/Welcome";
import Inputs from "./components/pages/Inputs";
import Outputs from "./components/pages/Outputs";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    localStorage.setItem("username", name);
    navigate("/inputs");
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!homePrice || !downPayment || !loanTerm || !interestRate) return;
    localStorage.setItem(
      "formData",
      JSON.stringify({ homePrice, downPayment, loanTerm, interestRate })
    );
    navigate("/outputs");
  };

  const calculateMortgage = () => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (!formData) return {};

    const loanAmount = formData.homePrice - formData.downPayment;
    const monthlyInterestRate = formData.interestRate / 100 / 12;
    const numberOfPayments = formData.loanTerm * 12;

    const monthlyPI =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const totalPaid = monthlyPI * numberOfPayments;
    const totalInterest = totalPaid - loanAmount;

    return {
      loanAmount: Number(loanAmount.toFixed(2)),
      monthlyPI: Number(monthlyPI.toFixed(2)),
      totalPaid: Number(totalPaid.toFixed(2)),
      totalInterest: Number(totalInterest.toFixed(2)),
    };
  };

  const { loanAmount, monthlyPI, totalPaid, totalInterest } = calculateMortgage();

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const formData = localStorage.getItem("formData");
    if (storedName) {
      setName(storedName);
      navigate("/inputs");
    }
    if (storedName && formData) {
      navigate("/outputs");
    }

  }, []);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              handleWelcomeSubmit={handleWelcomeSubmit}
              name={name}
              setName={setName}
            />
          }
        />
        <Route
          path="/inputs"
          element={
            <Inputs
              handleInputSubmit={handleInputSubmit}
              homePrice={homePrice}
              setHomePrice={setHomePrice}
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
            />
          }
        />
        <Route
          path="/outputs"
          element={
            <Outputs
              loanAmount={loanAmount}
              monthlyPI={monthlyPI}
              totalPaid={totalPaid}
              totalInterest={totalInterest}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;

