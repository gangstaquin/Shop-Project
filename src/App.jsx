import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/shop/cart/Cart';
import { Nav } from './components/Nav';
import { ShopContextProvider } from './context/shopContext';

function App() {

  return (
    <>
      <div className='App'>
        <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
        </ShopContextProvider>
      </div>
      </>
  )
}

export default App
