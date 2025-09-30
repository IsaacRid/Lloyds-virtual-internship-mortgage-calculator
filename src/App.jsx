import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Welcome from "./components/pages/Welcome";
import Inputs from "./components/pages/Inputs";
import Outputs from "./components/pages/Outputs";

function App() {
  const navigate = useNavigate();   // ✅ works now, because Router is above App
  const [name, setName] = useState("");

  const handleWelcomeSubmit = () => {
    if (!name) return;
    localStorage.setItem("username", name);
    navigate("/inputs");
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
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/outputs" element={<Outputs />} />
      </Routes>
    </Layout>
  );
}

export default App;

