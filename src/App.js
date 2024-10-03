import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import Academics from './components/Academics'
import Admissions from './components/Admissions'
import Faculty from './components/Faculty'
import Students from './components/Students'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import "./App.css"
function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/academics' element={<Academics />}></Route>
          <Route path='/admissions' element={<Admissions />}></Route>
          <Route path='/faculty' element={<Faculty />}></Route>
          <Route path='/students' element={<Students />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>



      </BrowserRouter>

    </div>
  )
}

export default App