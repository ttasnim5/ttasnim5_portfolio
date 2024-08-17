import './style.scss'

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import WorkHistory from './components/pages/WorkHistory';
import SkillsandTech from './components/pages/SkillsandTech';
import Footer from './components/pages/Footer';
import HomePage from './components/pages/HomePage';

// import { AboutMe, Projects, SkillsandTech, WorkHistory, ContactInfo } from "./components/pages";

function App() {
  // add a search engine eventually !
  return (
    <>
      <div>
        <NavBar />

        <Routes>
          <Route path="/ttasnim5_portfolio" element={<HomePage />} />
          <Route path="/ttasnim5_portfolio/AboutMe" element={<AboutMe />} />
          <Route path="/ttasnim5_portfolio/Projects" element={<Projects />} />
          <Route path="/ttasnim5_portfolio/WorkHistory" element={<WorkHistory />} />
          <Route path="/ttasnim5_portfolio/SkillsandTech" element={<SkillsandTech />} />
        </Routes>

        <Footer />
      </div>
      
    </>
  )
}

export default App
