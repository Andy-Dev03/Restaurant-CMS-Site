const Navbar = () => {
  return (
    <>
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
                  className="text-white font-semibold drop-shadow-[1px_0.5px_4.5px_white]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="cuisines.html"
                  className="text-white font-semibold drop-shadow-[1px_0.5px_4.5px_white]"
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
    </>
  );
};

export default Navbar;
