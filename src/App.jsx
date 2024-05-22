import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import { CartProvider } from './Context/CartContext'

function App() {

  return (
    <CartProvider>
      <Header />
      <main className='md:mt-28 mt-14'>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
