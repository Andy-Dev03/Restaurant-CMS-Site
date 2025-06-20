import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 col-span-1 text-white p-6 sticky top-0 h-screen">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">CMS Admin</h1>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-lg ${
              isActive
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <i className="fa-solid fa-list-ul mr-3"></i>Entity List
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-lg ${
              isActive
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <i className="fa-solid fa-plus mr-3"></i>Create Entity
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-lg ${
              isActive
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <i className="fa-solid fa-user-plus mr-3"></i>Add User
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
