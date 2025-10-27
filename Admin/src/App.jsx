import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import OrderItem from "./pages/OrderItem";

function App() {
  // const token = localStorage.getItem("token");

  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-4  sm:flex-row items-center sm:items-start ">
        <Sidebar />
        <div className="w-full flex-1">
          <Routes>
            <>
              <Route index element={<Home />} />
              <Route path="/list-item" element={<Home />} />
              <Route path="/order-item" element={<OrderItem />} />
            </>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
