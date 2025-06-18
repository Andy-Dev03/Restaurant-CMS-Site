import { useState } from "react";

const Upload = () => {
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
              className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
            >
              <i className="fa-solid fa-plus mr-3"></i>Create Entity
            </a>

            <a
              href=""
              className="flex items-center px-3 py-2 rounded-lg bg-gray-800"
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

        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upload Image</h2>
            <p className="text-gray-600">Upload image for entity</p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                for="entityName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Entity Name
              </label>
              <input
                type="text"
                id="entityName"
                name="entityName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter entity name or title"
              />
            </div>

            <div>
              <label
                for="imageFile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Image File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex items-center">
                <input
                  type="file"
                  id="imageFile"
                  name="imageFile"
                  accept="image/*"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-900 file:text-white hover:file:bg-gray-700"
                />

                <i className="fa-solid fa-cloud-arrow-up text-gray-500 text-xl"></i>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                <i className="fas fa-upload mr-2"></i>
                Upload Image
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
