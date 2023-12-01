import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { DogPage } from './components/Dogs/DogPage';
import { MyCart } from './components/Cart/MyCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className='page-container'>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogPage />} />
          <Route path="/cart" element={<MyCart />} />
        </Route>
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
