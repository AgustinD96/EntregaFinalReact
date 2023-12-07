import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../src/components/Cart/Cart';
import CartProvider from '../src/components/CartContext/CartContext';
import Error from '../src/components/Error';
import { Checkout } from './components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <CartProvider>
     <NavBar/>
     
         <Routes>
         <Route path='/' element={<ItemListContainer />} />
         <Route path='/category/:id' element={<ItemListContainer/>} />
         <Route path='/item/:id' element={<ItemDetailContainer/>} />
         <Route path={"/cart"} element={<Cart/>} />
         <Route path={"/checkout"} element={<Checkout/>} />
         <Route path='*' element={<Error/>} />
         </Routes>
         
      </CartProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
