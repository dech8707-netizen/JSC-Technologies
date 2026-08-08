import React from "react"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import {Routes, Route } from "react-router-dom";
import Header from "./Components/Header"

const App = () => {
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}
export default App
