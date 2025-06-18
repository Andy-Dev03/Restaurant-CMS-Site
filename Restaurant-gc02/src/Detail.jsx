import { useState } from "react";

const Detail = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        {/* <!-- Sticky Navigation --> */}
        <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 p-4">
          <nav>
            <div className="flex items-center justify-between">
              <p className="font-bold text-2xl text-white">
                Restaurant Fun<span className="text-orange-600">.</span>
              </p>
              <ul className="flex gap-12 mr-12">
                <li>
                  <a
                    href="../index.html"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="cuisines.html"
                    className="text-white font-semibold hover:drop-shadow-[1px_0.5px_4.5px_white] transition duration-200"
                  >
                    Cuisines
                  </a>
                </li>
              </ul>

              <button className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-2 rounded-full mr-4 hover:from-orange-400 hover:to-red-500 transition duration-200 hover:shadow-sm shadow-gray-600">
                <a href="#" className="text-white font-bold">
                  Login
                </a>
              </button>
            </div>
          </nav>
        </div>

        <div className="text-white px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* <!-- Header --> */}
            <div className="text-center mb-12 bg-gradient-to-r from-blue-600/20 via-transparent to-orange-600/20 py-12 rounded-2xl shadow-xl/50 shadow-white/80">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-orange-100/90 to-orange-400 bg-clip-text text-transparent">
                Welcome to Detail Cuisines Page
              </h1>
              <p className="font-bold text-gray-300 text-lg leading-relaxed">
                In here you can find whatever cuisines you like :3
              </p>
            </div>

            {/* <!-- Back Button --> */}
            <div className="mb-8">
              <a
                href="cuisines.html"
                className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition duration-200 text-gray-300 hover:text-white border border-gray-600/50"
              >
                <span className="font-bold text-2xl">←</span>
                Back to Cuisines
              </a>
            </div>

            {/* <!-- Detail Section --> */}
            <div className="px-4 py-12 text-center text-white bg-gradient-to-r from-orange-600/20 via-transparent to-purple-600/20 rounded-xl border border-gray-700/30 shadow-2xl">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-orange-700 via-orange-100 to-purple-700 bg-clip-text text-transparent">
                Detail Of -Name-
              </h2>

              {/* <!-- Detail Card --> */}
              <div className="bg-gradient-to-br from-white/95 to-gray-100/95 rounded-2xl text-gray-800 max-w-4xl mx-auto overflow-hidden shadow-2xl border border-gray-200">
                {/* <!-- Image Section --> */}
                <div className="relative h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-8xl">🍝</span>
                </div>

                {/* <!-- Content Section --> */}
                <div className="p-8 text-left">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* <!-- Left Column --> */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Restaurant Name
                        </h3>
                        <p className="text-2xl font-bold text-gray-800">
                          Bella Italia
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Price
                        </h3>
                        <div className="flex items-center gap-2 text-center">
                          <span className="text-2xl font-bold text-green-600">
                            Rp
                          </span>
                          <span className="text-gray-600 text-xl">10.000</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Category
                        </h3>
                        <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          name
                        </span>
                      </div>
                    </div>

                    {/* <!-- Right Column --> */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Created By
                        </h3>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">A</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Andy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Description Section --> */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Experience authentic Italian cuisine at Bella Italia,
                      where traditional recipes meet modern culinary techniques.
                      Our passionate chefs use only the finest imported
                      ingredients to create dishes that transport you straight
                      to the heart of Italy. From handmade pasta to wood-fired
                      pizzas, every meal is crafted with love and attention to
                      detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer className="bg-gray-900/80 border-t border-gray-700/50 py-8 px-4 mt-12">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>&copy; 2025 Restaurant Fun. Andy.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Detail;
