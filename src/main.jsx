import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
)
