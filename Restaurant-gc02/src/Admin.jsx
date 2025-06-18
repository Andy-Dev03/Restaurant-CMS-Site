import { useState } from "react";

const Admin = () => {
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
              className="flex items-center px-3 py-2 rounded-lg bg-gray-800"
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
              className="flex items-center px-3 py-2 rounded-lg  hover:bg-gray-800 hover:text-white"
            >
              <i className="fa-solid fa-user-plus mr-3"></i>Add User
            </a>
          </nav>
        </div>

        <div className="bg-white col-span-3 p-6 min-w-screen">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Entity List
            </h2>
            <p className="font-semibold text-gray-600">All the entitiy </p>
          </div>

          <div class="bg-white rounded-lg overflow-hidden">
            <table class=" min-w-full">
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    nama
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-40 truncate border border-gray-200">
                    akdkawekwakeawkekwaeeeeeeeeeeeeeeeeeeeeeeee
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    10.000
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-40 truncate border border-gray-200">
                    akdkawekwakeawkekwaeeeeeeeeeeeeeeeeeeeeeeee
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    17/6/2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    17/6/2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    2
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200">
                    <div className="block py-4">
                      <a
                        href="edit-entity.html?id=2"
                        class="text-blue-600 hover:text-blue-900 mr-3 flex items-center"
                      >
                        <i class="fas fa-edit text-center mr-3"></i> Edit
                      </a>
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
      </div>
    </>
  );
};

export default Admin;
