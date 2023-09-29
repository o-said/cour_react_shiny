import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Survey from './pages/survey/Survey'
import Header from './components/Header/Header'
import Results from './pages/results/Results'
import Freelances from './pages/freelances/Freelances'

//import ClienForm from './components/ClienForm/ClienForm'
//import FreelanceForm from './components/FreelanceForm/FreelanceForm'
import Error from './components/Error/Error'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)