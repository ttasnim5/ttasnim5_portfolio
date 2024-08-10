import { useState } from 'react'
import './style.scss'

import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import SkillsandTech from './components/SkillsandTech';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Border from './components/Border';

function App() {
  const [count, setCount] = useState(0)

  // add a search engine eventually !

  return (
    <>
      <h1>Tahsin's Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <AboutMe />
        <Border />
        <SkillsandTech />
        <Border />
        <Projects />
        <Border />
        <WorkHistory />
        <Border />
        <ContactInfo />
      </div>
      
    </>
  )
}

export default App
