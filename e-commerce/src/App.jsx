

import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>

          <Route path='/cart' element={<Cart />}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
