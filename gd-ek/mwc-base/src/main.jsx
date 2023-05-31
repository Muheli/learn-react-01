import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ExperienceProvider } from "@vatom/experience-sdk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/4KuG23THVY">
      <ExperienceProvider>
        <App />
      </ExperienceProvider>
    </BrowserRouter>
  </React.StrictMode>
);


/***
  For quick test:
  
    <h1>Broken Flowers Micro-Site</h1>
    <ExperienceProvider>
    </ExperienceProvider>
***/