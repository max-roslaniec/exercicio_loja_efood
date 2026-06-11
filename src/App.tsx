import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
