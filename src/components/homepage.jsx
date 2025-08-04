import Navbar from './navbar'
import Footer from "./footer"

const homepage = () => {
  return (
    <div className='flex flex-column w-full h-full'>
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