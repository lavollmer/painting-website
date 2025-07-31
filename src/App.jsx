import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/homepage"
import About from "./components/about"
import Pricing from "./components/pricing"
import Contact from "./components/contact"
import Inquiries from "./components/inquiries"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path='about' element={<About />}/>
            <Route path='pricing' element={<Pricing />}/>
            <Route path='inquiries' element={<Inquiries />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
