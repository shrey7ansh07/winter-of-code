import React from "react"
import {
  Header,
  Home,
  Projects,
  Faqs,
  Login,  
} from "./index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" Component={Home} />
        
        <Route path="/projects" Component={Projects} />
        <Route path="/Faqs" Component={Faqs} /> 
        <Route path="/Login" Component={Login} /> 


      </Routes>

    </Router>
  )
}

export default App
