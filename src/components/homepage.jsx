import '../App.css'
import Navbar from './navbar'
import Footer from "./footer"

const homepage = () => {
  return (
    <div className='flex flex-column'>
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default homepage