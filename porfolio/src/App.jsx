
import './App.css'
import About from './rouets/About'
import Home from './rouets/Home'
import Project from './rouets/Project'
import Contact from './rouets/Contact'
import { Route, Routes } from 'react-router'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Project" element={<Project />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/About" element={<About />}></Route>
    </Routes>

    </>
  )
}

export default App
