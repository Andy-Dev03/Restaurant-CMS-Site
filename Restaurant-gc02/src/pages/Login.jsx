import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formLogin = async (event) => {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:3000/login", {
      email,
      password,
    });

    localStorage.setItem("accessToken", data.accessToken);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-100 inset-shadow-sm inset-shadow-indigo-500/50 border border-blue-500/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent drop-shadow-[1.5px_0.5px_1px_black] ">
              CMS LOGIN
            </h1>
            <p class="text-gray-600 mt-2 font-semibold">Only Admin & Staff</p>
          </div>

          <form className="space-y-6" onSubmit={formLogin}>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>

            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-gray-700 via-gray-900 to-gray-600 text-white py-2 px-4 rounded-md hover:from-gray-600 hover:via-gray-800 hover:to-gray-500 transition-colors font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
