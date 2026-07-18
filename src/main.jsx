import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DarkModeProvider from "./context/DarkModeProvider.jsx";
import PageControlProvider from "./context/PageControlProvider.jsx";
import "./assets/styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <PageControlProvider>
          <App />
        </PageControlProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>,
);
