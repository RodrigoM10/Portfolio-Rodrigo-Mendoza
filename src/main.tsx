import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import { AllProjects } from "./app/components/AllProjects.tsx";
import { LanguageProvider } from "./app/LanguageContext.tsx"; // <-- Agregamos esto
import "./styles/index.css";
import "./styles/fonts.css";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/allProjects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);