import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = { email, password };

    const response = await axios
      .post("http://localhost:8000/login", user)
      .catch((err) => {
        console.log("error", err.message);
      });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
  };
  return (
    <main className="mt-28 max-w-[768px] mx-auto">
      <h1 className="text-3xl font-semibold text-center my-4">
        You have not logged in
      </h1>
      {/* <form
        action=""
        className="border p-8 flex flex-col gap-4"
        onSubmit={(e) => submitHandler(e)}>
        <div className="flex  flex-col ">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border rounded-[4px] px-2 py-0.5 text-lg"
            placeholder="example@g.co"
          />
        </div>
        <div className="flex  flex-col ">
          <label className="w-full" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 border rounded-[4px] px-2 py-0.5 text-lg"
            id="password"
            placeholder="*******"
          />
        </div>
        <button className="px-4 py-2 rounded-xl text-white bg-blue-700">
          Login
        </button>
      </form> */}
    </main>
  );
}

export default Login;
