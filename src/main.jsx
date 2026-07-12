import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";

import { ThemeProvider } from "./context/ThemeContext";
import { CityProvider } from "./context/CityContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CityProvider>
        <App />
      </CityProvider>
    </ThemeProvider>
  </StrictMode>
);