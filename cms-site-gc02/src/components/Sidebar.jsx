import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">CMS Admin</h1>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-gray-800 text-white shadow-lg"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <i className="fa-solid fa-list-ul mr-3 w-5"></i>
          <span>Entity List</span>
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            `flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-gray-800 text-white shadow-lg"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <i className="fa-solid fa-plus mr-3 w-5"></i>
          <span>Create Entity</span>
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-gray-800 text-white shadow-lg"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <i className="fa-solid fa-user-plus mr-3 w-5"></i>
          <span>Add User</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
