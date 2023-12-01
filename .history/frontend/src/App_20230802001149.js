import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { DogPage } from "./components/Dogs/DogPage";
import { MyCart } from "./components/Cart/MyCart";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect } from "react";
import axios from 'axios';

function App() {
  useEffect(()=>{
    async function getUser() {
      try {
        const response = await axios.get('http://localhost:8080/v1/dogs');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [])
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="page-container">
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/dogs" element={<DogPage />} />
              <Route path="/cart" element={<MyCart />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
