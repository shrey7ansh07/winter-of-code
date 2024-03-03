import React from "react"
import {
  Header,
  Home,
  Projects,
  Faqs,
  Login,  
} from "./index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer"



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
      
      <Footer />

    </Router>
  )
}

export default App
