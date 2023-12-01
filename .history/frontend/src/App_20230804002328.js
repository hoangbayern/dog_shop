import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { DogPage } from "./components/Dogs/DogPage";
import { MyCart } from "./components/Cart/MyCart";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./components/Contexts/CartContext";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:8080/v1/dogs");
        console.log(response);
        setAllDogs(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  return (
    <>
      <CartContext.Provider value={{myCart, addCart, total, setTotal}}>
        <BrowserRouter>
          <Navbar />
          <div className="page-container">
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/dogs" element={<DogPage allDogs={allDogs} />} />
                <Route path="/cart" element={<MyCart />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
