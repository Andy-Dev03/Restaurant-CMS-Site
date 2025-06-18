import { useState } from "react";

const Add = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen overflow-y-auto">
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
              className="flex items-center px-3 py-2 rounded-lg  hover:bg-gray-800 hover:text-white"
            >
              <i className="fa-solid fa-plus mr-3"></i>Create Entity
            </a>

            <a
              href=""
              className="flex items-center px-3 py-2 rounded-lg  hover:bg-gray-800 hover:text-white"
            >
              <i className="fa-solid fa-upload mr-3"></i>Upload Image
            </a>

            <a
              href=""
              className="flex items-center px-3 py-2 rounded-lg bg-gray-800 "
            >
              <i className="fa-solid fa-user-plus mr-3"></i>Add User
            </a>
          </nav>
        </div>

        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Add New User</h2>
            <p className="text-gray-600">
              Register a new staff to the Database
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Insert new username"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Insert new phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Insert new email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Insert new Password"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="6"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Insert your address here..."
              ></textarea>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
