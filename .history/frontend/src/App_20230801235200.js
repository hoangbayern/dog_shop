import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { DogPage } from "./components/Dogs/DogPage";
import { MyCart } from "./components/Cart/MyCart";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
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
