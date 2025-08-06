import '../App.css'
import '../index.css'
import Navbar from './navbar'
import Footer from "./footer"

const homepage = () => {
  return (
    <div className='flex'>
      <Navbar />
      <h1 className="text-3xl font-bold text-red-500">Hello Tailwind</h1>
      <h1 className='bg-cherry-pink text-white p-4'>Custom Watercolor Illustrations</h1>
      <h1>By Laura</h1>
      <Footer/>
    </div>
  )
}

export default homepage