import './style.scss'

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import WorkHistory from './components/pages/WorkHistory';
import SkillsandTech from './components/pages/SkillsandTech';
import Footer from './components/pages/Footer';

// import { AboutMe, Projects, SkillsandTech, WorkHistory, ContactInfo } from "./components/pages";

function App() {
  // add a search engine eventually !
  return (
    <>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/WorkHistory" element={<WorkHistory />} />
          <Route path="/SkillsandTech" element={<SkillsandTech />} />
        </Routes>

        <Footer />
      </div>
      
    </>
  )
}

export default App
