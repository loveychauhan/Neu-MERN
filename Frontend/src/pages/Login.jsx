import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/contextProvider";

function Login() {
  const [isSignin, setIsSignin] = useState(true);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const toggleMode = () => setIsSignin((prev) => !prev);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:8000/${isSignin ? "login" : "signUp"}`,
      formData
    );

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      setFormData({ name: "", email: "", password: "" });
      setToken(response.data.token);
      setIsAuthenticated((prev) => !prev);
      navigate("/");
    }
  };

  return (
    <div className="min-h-[calc(100vh-150px)] flex items-center justify-center bg-gradient-to-br">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 animate-fade-in">
          {isSignin ? "Welcome Back" : "Create Your Account"}
        </h1>

        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          {!isSignin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input-field"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            className="input-field"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            className="input-field"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200">
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={toggleMode}
          className="mt-4 text-sm text-center text-blue-500 cursor-pointer hover:underline transition">
          {isSignin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </div>
    </div>
  );
}

export default Login;
