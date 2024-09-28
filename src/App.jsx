import './App.css'
import Navbar from './components/navbar'
import Contact from './components/contact.jsx'
import Intro from './components/intro.jsx'
import Skill from './components/skills.jsx'
import Project from './components/project.jsx'
import Education from './components/education.jsx'
import Footer from './components/footer.jsx'
function App() {

  return (
    <div className='container'>
    <Navbar/>
    <Intro/>
    <Skill/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
