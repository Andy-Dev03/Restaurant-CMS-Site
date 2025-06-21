import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <>
      {/* When under md view */}
      <div className="md:hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
        <h1 className="font-bold text-xl">CMS Admin</h1>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 min-w-0 ">
          <div className="p-4 md:p-6">
            <Outlet />
          </div>
        </div>
      </div>

      {/* When under md view */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <nav className="flex justify-around py-2">
          <a href="/" className="flex flex-col items-center p-2 text-xs">
            <i className="fa-solid fa-list-ul text-lg mb-1"></i>
            <span>List</span>
          </a>
          <a href="/create" className="flex flex-col items-center p-2 text-xs">
            <i className="fa-solid fa-plus text-lg mb-1"></i>
            <span>Create</span>
          </a>
          <a href="/add" className="flex flex-col items-center p-2 text-xs">
            <i className="fa-solid fa-user-plus text-lg mb-1"></i>
            <span>Add User</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default RootLayout;
