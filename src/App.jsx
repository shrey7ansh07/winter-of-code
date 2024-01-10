import React from "react"
import {
  Header,
  Home,
  Projects,
} from "./index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
      </Routes>

    </Router>
  )
}

export default App
