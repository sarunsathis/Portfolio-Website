import { useState } from 'react'
import './styles/global.css'

// Component Imports 
import Header from './components/header/Header.jsx'
import Paragraph from './components/paragraph/Paragraph.jsx'
import WorkEx from './components/workEx/WorkEx.jsx'
import TabContainer from './components/tabContainer/TabContainer.jsx'


function App() {
  const [selectedSection, setSelectedSection] = useState('home');

  function changeSelectedSection(selection) {
    console.log(selection);
    setSelectedSection(selection);
  }

  return (
    <>
      <Header stateVar={selectedSection} stateFunc={changeSelectedSection} />

      <TabContainer className={ selectedSection == 'home' ? 'd-block' : 'd-none' }>
        <Paragraph buttonText="Download CV" secondaryButtonText="View Projects">
            <p className='m-0 fs-24'>Hi, I am</p>
            <h1 className='m-0 pageTitle'>Sarun Menon</h1>
            <p className='m-0 mb-16 fs-18 pageSummary'>I'm a passionate developer with a love for creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies and a keen eye for design, I transform ideas into elegant solutions that make a difference.</p>
            <p className='m-0 fs-18 pageSummary'>My journey in tech has been driven by curiosity and a commitment to continuous learning. I specialize in building responsive web applications, crafting intuitive user interfaces, and solving complex problems with clean, maintainable code.</p>
        </Paragraph>

        <WorkEx/>
      </TabContainer>

    </>
  )
}

export default App
