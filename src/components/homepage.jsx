import '../App.css'
import Navbar from './navbar'
import Footer from "./footer"

const homepage = () => {
  return (
    <div className='flex'>
      <Navbar />
      <h1 className='bg-cherry-pink test-white p-4'>Custom Watercolor Illustrations</h1>
      <h1>By Laura</h1>
      <Footer/>
    </div>
  )
}

export default homepage