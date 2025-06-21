import axios from "axios";
import { useState, useEffect } from "react";
import Toastify from "toastify-js";
import { Link } from "react-router";
const Admin = () => {
  // Get Cuisines
  const [getCuisines, setCuisines] = useState([]);

  const fetchCuisines = async () => {
    const { data } = await axios.get("http://localhost:3000/cuisines", {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    });
    setCuisines(data.data);
  };

  // Delete
  const deleteButton = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.delete(
        `http://localhost:3000/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCuisines();
      Toastify({
        text: data.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#34D399",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#F87171",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();
    }
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  return (
    <>
      <div className="pb-20 md:pb-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Entity List</h2>
          <p className="font-semibold text-gray-600">All the entitiy </p>
        </div>

        <div className="hidden md:block rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full ">
              <thead className="bg-gray-900 border">
                <tr>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    ImageUrl
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    createdAt
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    updatedAt
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    categoryId
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    authorId
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="text-center bg-white">
                {getCuisines.map((c) => (
                  <tr key={c.id}>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      {c.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-40 border truncate border-gray-200">
                      {c.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-40 truncate border border-gray-200">
                      {c.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      {c.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-40 truncate border border-gray-200">
                      {c.imgUrl}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      {new Date(c.createdAt).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      {new Date(c.updatedAt).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      {c.categoryId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      {c.authorId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                      <div className="block ">
                        <button className="text-blue-600 hover:text-blue-900 mr-3 flex items-center">
                          <i className="fas fa-edit text-center mr-3"></i> Edit
                        </button>
                      </div>

                      <div className="block py-4">
                        <button
                          className="text-red-600 hover:text-red-900 flex items-center"
                          onClick={() => deleteButton(c.id)}
                        >
                          <i className="fas fa-trash mr-3"></i> Delete
                        </button>
                      </div>

                      <Link to={`/upload/${c.id}`}>
                        <div className="block">
                          <button className="text-yellow-500 hover:text-yellow-800 flex items-center">
                            <i className="fa-solid fa-file-arrow-up mr-3"></i>{" "}
                            Upload
                          </button>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* When the view is under md */}
        <div className="md:hidden space-y-4">
          {getCuisines.map((c) => (
            <div key={c.id} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg text-gray-900">
                  {c.name}
                </h3>
                <span className="text-sm text-gray-500">ID: {c.id}</span>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-600 line-clamp-2">{c.description}</p>
                <span className="text-gray-500 line-clamp-2">
                  Image Url: {c.imgUrl}
                </span>
                <p className="font-semibold text-green-600">
                  {c.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                  <span>Category: {c.Category.name}</span>
                  <span>Author: {c.User.username}</span>
                  <span>
                    Created: {new Date(c.createdAt).toLocaleDateString("id-ID")}
                  </span>
                  <span>
                    Updated: {new Date(c.updatedAt).toLocaleDateString("id-ID")}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4 pt-3 border-t">
                <button className="flex items-center px-3 py-1 text-blue-600 hover:text-blue-900 ">
                  <i className="fas fa-edit mr-1"></i>
                  <span className="text-sm">Edit</span>
                </button>
                <button
                  onClick={() => deleteButton(c.id)}
                  className="flex items-center px-3 py-1 text-red-600 hover:text-red-900 "
                >
                  <i className="fas fa-trash mr-1"></i>
                  <span className="text-sm">Delete</span>
                </button>
                <div className="text-yellow-500 hover:text-yellow-800 flex items-center">
                  <Link to={`/upload/${c.id}`}>
                    <button className="text-yellow-500 hover:text-yellow-800 flex items-center">
                      <i className="fa-solid fa-file-arrow-up mr-3"></i>
                      <span className="text-sm">Upload</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* When the cuisines is empty */}
        {getCuisines.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              <i className="fa-solid fa-database"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No cuisines found
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
