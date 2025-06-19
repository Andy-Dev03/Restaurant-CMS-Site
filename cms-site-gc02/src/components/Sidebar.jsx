const Sidebar = () => {
  return (
    <>
      {/* SideBar */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 col-span-1 text-white p-6">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">CMS Admin</h1>
        </div>

        <nav className="space-y-2">
          <a
            href=""
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
          >
            <i className="fa-solid fa-list-ul mr-3"></i>Entity List
          </a>

          <a
            href=""
            className="flex items-center px-3 py-2 rounded-lg bg-gray-800 "
          >
            <i className="fa-solid fa-plus mr-3"></i>Create Entity
          </a>

          <a
            href=""
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
          >
            <i className="fa-solid fa-upload mr-3"></i>Upload Image
          </a>

          <a
            href=""
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
          >
            <i className="fa-solid fa-user-plus mr-3"></i>Add User
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
