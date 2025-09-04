import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Navbar />}
      <div className="flex flex-col mx-4  sm:flex-row items-center sm:items-start ">
        <Sidebar />
        <div className="w-full flex-1">
          <Routes>
            {token ? (
              <>
                <Route index element={<Home />} />
                <Route path="/list-item" element={<Home />} />
                <Route path="/order-item" element={<Home />} />
              </>
            ) : (
              <Route path="/login" element={<Login />} />
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
