import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import CartPage from "./component/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
