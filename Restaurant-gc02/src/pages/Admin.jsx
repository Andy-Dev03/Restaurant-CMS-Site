import { useState } from "react";

import Sidebar from "../components/Sidebar";
const Admin = () => {
  const [showNHide, setShowNHide] = useState("listCuisines");
  const []

  const btnClick = () => {
    setShowNHide("editCuisines");
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen overflow-y-auto">
        <Sidebar />

        {showNHide === "listCuisines" && (
          <div className="bg-white col-span-3 p-6 min-w-screen">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Entity List
              </h2>
              <p className="font-semibold text-gray-600">All the entitiy </p>
            </div>

            <div class="bg-white rounded-lg overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-gray-900">
                  <tr>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      ID
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Description
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Price
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      ImageUrl
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      createdAt
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      updatedAt
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      categoryId
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      authorId
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="text-center bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-40 border truncate border-gray-200">
                      namaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-40 truncate border border-gray-200">
                      akdkawekwakeawkekwaeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      10.000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-40 truncate border border-gray-200">
                      akdkawekwakeawkekwaeeeeeeeeeeeeeeeeeeeeeeee
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      17/6/2025
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      17/6/2025
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      2
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      <div className="block py-4">
                        <button
                          // href="#"
                          class="text-blue-600 hover:text-blue-900 mr-3 flex items-center"
                          onClick={btnClick}
                        >
                          <i class="fas fa-edit text-center mr-3"></i> Edit
                        </button>
                      </div>

                      <div className="block">
                        <a
                          href="#"
                          class="text-red-600 hover:text-red-900 flex items-center"
                        >
                          <i class="fas fa-trash mr-3"></i> Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showNHide === "editCuisines" && (
          <div className="bg-white col-span-3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Entity</h2>
              <p className="text-gray-600">Update your data to the databased</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Enter entity name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Price (Rp)
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="imageUrl"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label
                    for="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <option value="" disabled>
                      Category
                    </option>
                    <option value="published">test</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Enter your description here..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 border border-black text-black rounded-md hover:"
                  onClick={() => {
                    setShowNHide("listCuisines");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
                >
                  Update Entity
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
