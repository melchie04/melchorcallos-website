import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DarkModeProvider from "./providers/DarkModeProvider.jsx";
import PageControlProvider from "./providers/PageControlProvider.jsx";
import "./assets/styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <PageControlProvider>
          <App />
        </PageControlProvider>
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>
);
