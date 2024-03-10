import './App.css'
import Navbar from './components/Navbar'
import PageTop from './components/PageTop'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <Router>
        <PageTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Services' element= {<Services />}/>
          <Route path='/About Us' element= { <AboutUs />} />
        </Routes>
      </Router>
     
    </>
     
  )
}

export default App
