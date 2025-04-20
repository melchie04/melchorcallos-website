import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DarkModeProvider from "./providers/DarkModeProvider.jsx";
import PageControlProvider from "./providers/PageControlProvider.jsx";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <PageControlProvider>
          <App />
        </PageControlProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);
