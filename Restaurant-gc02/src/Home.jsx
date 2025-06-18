import { useState } from "react";

import HomeCard from "./components/HomeCard";

const Home = ({ cuisines }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        {/* <!-- Navigation --> */}
        <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 p-4">
          <nav>
            <div className="flex items-center justify-between">
              <p className="font-bold text-2xl text-white">
                Restaurant Fun<span className="text-orange-600">.</span>
              </p>
              <ul className="flex gap-12 mr-12">
                <li>
                  <a
                    href=""
                    className="text-white font-semibold hover:drop-shadow-[1px_0.5px_4.5px_white] transition duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Cuisines
                  </a>
                </li>
              </ul>

              <button className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-2 rounded-full mr-4 hover:from-orange-400 hover:to-red-500 transition duration-200 hover:shadow-sm shadow-gray-600">
                <a href="" className="text-white font-bold">
                  Login
                </a>
              </button>
            </div>
          </nav>
        </div>

        {/* <!-- First Section --> */}
        <section className="px-4 py-32 text-center text-white bg-gradient-to-r from-blue-600/20 via-transparent to-orange-600/20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Website Project Restaurant
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              This project was made from monday and has to finish in 1 week, Of
              course i will burn out :).
            </p>
            <a
              href="#allC"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 px-10 py-4 rounded-full text-white font-bold text-lg transition duration-200 inline-block transform hover:-translate-y-1"
            >
              Get to Cuisines
            </a>
          </div>
        </section>

        {/* <!-- Feature Section --> */}
        <div className="max-w-6xl py-12 mx-auto">
          <section className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-gray-700/50 shadow-xl text-white">
            {/* <!-- Search --> */}
            <div className="relative mb-6">
              <input
                type="text"
                id="searchInput"
                placeholder="Search cuisines name"
                className="w-full pl-12 pr-4 py-4 bg-gray-700/80 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600/50 transition duration-200"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
                🔍
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* <!-- Filter --> */}
              <select
                defaultValue=""
                className="text-center bg-gray-700/80 rounded-lg py-2 focus:ring-2 focus:ring-orange-500 border border-gray-600/50 transition duration-200"
              >
                <option value="" disabled>
                  Filter
                </option>
                <option value="">Category</option>
              </select>

              {/* <!-- Sort --> */}
              <select
                defaultValue=""
                className="text-center bg-gray-700/80 rounded-lg py-2 focus:ring-2 focus:ring-orange-500 border border-gray-600/50 transition duration-200"
              >
                <option value="" disabled>
                  Sort
                </option>
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>
          </section>
        </div>

        {/* <!-- All Cuisines --> */}
        <section
          className="px-4 py-12 text-white bg-gradient-to-b from-transparent to-gray-800/50"
          id="allC"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 via-white to-orange-500 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(1px 0.5px 0.5px rgba(255, 255, 255, 0.932))",
              }}
            >
              ALL CUISINES
            </h2>

            <HomeCard cuisines={cuisines} />
          </div>
        </section>

        {/* <!-- Pagination --> */}
        <div className="flex justify-center items-center gap-2 bg-gray-800/50 p-4 rounded-xl">
          <button className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200 text-gray-400">
            ←
          </button>
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white">
            1
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition duration-200">
            2
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition duration-200">
            3
          </button>
          <button className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200 text-gray-400">
            →
          </button>
        </div>

        {/* <!-- Footer --> */}
        <footer className="bg-gray-900/80 border-t border-gray-700/50 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>&copy; 2025 Restaurant Fun. Andy.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
