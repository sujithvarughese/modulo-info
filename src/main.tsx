import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import About from "./pages/About.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import {MantineProvider} from "@mantine/core";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<About />} index={true} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </HashRouter>
    </MantineProvider>
  </StrictMode>,
)
