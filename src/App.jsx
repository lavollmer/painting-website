import './App.css'
import { BrowerserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/navbar"
import Homepage from "./components/homepage"

function App() {

  return (
    <>
      <BrowerserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path='about' element={<About />}/>
            <Route path='pricing' element={<Pricing />}/>
            <Route path='inquiries' element={<Inquiries />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
      </BrowerserRouter>
    </>
  )
}

export default App
