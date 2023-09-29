import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
//import Survey from './pages/Survey/survey'
import Header from './components/Header/Header'
import Survey from './pages/survey/Survey'
import ClienForm from './components/ClienForm/ClienForm'
import FreelanceForm from './components/FreelanceForm/FreelanceForm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} >
          <Route path="client" element={<ClienForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)