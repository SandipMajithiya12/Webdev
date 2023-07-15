

import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import ShopcontextProvider from './context/ShopcontextProvider';

function App() {
  

  return (
    <>
    <ShopcontextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>

          <Route path='/cart' element={<Cart />}/>

        </Routes>
      </Router>
      </ShopcontextProvider>
    </>
  )
}

export default App
