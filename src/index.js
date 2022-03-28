import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MContact from "./pages/MContact";
import Lightbox from "./components/Lightbox";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Spa() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Lightbox/>} />
        <Route path="/contact" element={<MContact />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById("root")
);
