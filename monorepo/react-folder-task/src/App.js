import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import './App.css';
import Dermal from "./assets/img/dermal_fillers.jpeg";
import SecretRF from "./assets/img/secretRF.jpeg";
import HArmonyCA from "./assets/img/harmonyCA.webp";
import Profhilo from "./assets/img/profhilo.png";
import Facials from "./assets/img/facials.jpeg";
import Sclerotherapy from "./assets/img/sclerotherapy.jpeg";
import LED from "./assets/img/Led.jpeg";
import FatDissolve from "./assets/img/fatDissolve.jpeg";
import GrowthFactors from "./assets/img/growthFactors.jpeg";
import SpecialPackage from "./assets/img/specialPackage.jpeg";
import Consultation from "./assets/img/consulation.jpeg";

const options = [
  { id: '1', name: 'Dermal Fillers', image: Dermal, text: "Dermal Fillers description" },
  { id: '2', name: 'Secret RF', image: SecretRF, text: "Secret RF description" },
  { id: '3', name: 'Harmony CA', image: HArmonyCA, text: "Harmony CA description" },
  { id: '4', name: 'Profhilo', image: Profhilo, text: "Profhilo description" },
  { id: '5', name: 'Facials', image: Facials, text: "Facials description" },
  { id: '6', name: 'Sclerotherapy', image: Sclerotherapy, text: "Sclerotherapy description" },
  { id: '7', name: 'LED', image: LED, text: "LED description" },
  { id: '8', name: 'Fat Dissolve', image: FatDissolve, text: "Fat Dissolve description" },
  { id: '9', name: 'Growth Factors', image: GrowthFactors, text: "Growth Factors description" },
  { id: '10', name: 'Special Package for Time Clinic', image: SpecialPackage, text: "Special Package description" },
  { id: '11', name: 'Consultation', image: Consultation, text: "Consultation description" },
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const numberOfSteps = 2;

  return (
    <Router>
      <div className="App">
        <Header currentStep={currentStep} totalSteps={numberOfSteps} />
        <Routes>
          <Route path="/" element={<Home options={options} setCurrentStep={setCurrentStep} />} />
          <Route path="/post/:selectedId" element={<Post options={options} setCurrentStep={setCurrentStep} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
