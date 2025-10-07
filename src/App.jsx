import React from "react";
import { useState } from "react";
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
    localStorage.setItem("formData", JSON.stringify({ homePrice, downPayment, loanTerm, interestRate }));
    navigate("/outputs");
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome handleWelcomeSubmit={handleWelcomeSubmit} name={name} setName={setName} />
          }
        />
        <Route path="/inputs" element={<Inputs handleInputSubmit={handleInputSubmit} homePrice={homePrice} setHomePrice={setHomePrice} downPayment={downPayment} setDownPayment={setDownPayment} loanTerm={loanTerm} setLoanTerm={setLoanTerm} interestRate={interestRate} setInterestRate={setInterestRate} />} />
        <Route path="/outputs" element={<Outputs />} />
      </Routes>
    </Layout>
  );
}

export default App;

