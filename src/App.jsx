
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Welcome from "./components/pages/Welcome";
import Inputs from "./components/pages/Inputs";
import Outputs from "./components/pages/Outputs";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/outputs" element={<Outputs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

