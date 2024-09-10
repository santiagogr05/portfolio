import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import HeroEnglish from "./sections/Hero/HeroEnglish";
import HeroSpanish from "./sections/Hero/HeroSpanish";
import Projects from "./sections/Projects/Projects";
import "./App.css";
import Skills from "./sections/Skills/Skills";
import FooterEnglish from "./sections/Footer/FooterEnglish";
import FooterSpanish from "./sections/Footer/FooterSpanish";


function EnglishVersion() {
  return (
    <>
      <HeroEnglish />
      <Projects />
      <Skills />
      <FooterEnglish />
    </>
  );
}


function SpanishVersion() {
  return (
    <>
      <HeroSpanish />    
      <Projects />
      <Skills />
      <FooterSpanish />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes> {/* Updated to Routes */}
        <Route path="/en" element={<EnglishVersion />} /> {/* Updated to element={} */}
        <Route path="/es" element={<SpanishVersion />} />
        <Route path="/" element={<EnglishVersion />} /> {/* Default to English */}
      </Routes>
    </Router>
  );
}

export default App;
