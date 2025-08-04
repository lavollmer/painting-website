import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/homepage"
import About from "./components/about"
import Pricing from "./components/pricing"
import Contact from "./components/contact"
import FAQ from "./components/FAQ"
import Shop from "./components/shop"
import Commissions from './components/commissions'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Homepage />}>
          <Route path='shop' element={<Shop />}/>
          <Route path='comissions' element={<Commissions />}/>
          <Route path='about' element={<About />}/>
          <Route path='pricing' element={<Pricing />}/>
          <Route path='FAQ' element={<FAQ />}/>
          <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
