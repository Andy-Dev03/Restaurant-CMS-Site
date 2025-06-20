import axios from "axios";
const TabelEntitiy = ({ getCuisines, fetchCuisines, setShowNHide }) => {
  // Go to Edit view
  const goEditButton = (cuisine) => {
    setFormCuisine(cuisine); //Ketika diclick semua cuisine terambil lagi
    setShowNHide("editCuisine"); //Ketika diclick entitylist jadi editCuisine
  };

  // Delete
  const deleteButton = async (id) => {
    const token = localStorage.getItem("accessToken");
    await axios.delete(`http://localhost:3000/cuisines/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchCuisines();
  };

  return (
    <>
      <div className="bg-white col-span-3 p-6 min-w-screen">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Entity List</h2>
          <p className="font-semibold text-gray-600">All the entitiy </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-900">
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

            <tbody className="text-center bg-white divide-y divide-gray-200">
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
                    <div className="block py-4">
                      <button
                        // href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3 flex items-center"
                        onClick={() => goEditButton(c)}
                      >
                        <i className="fas fa-edit text-center mr-3"></i> Edit
                      </button>
                    </div>

                    <div className="block">
                      <button
                        href="#"
                        className="text-red-600 hover:text-red-900 flex items-center"
                        onClick={() => deleteButton(c.id)}
                      >
                        <i className="fas fa-trash mr-3"></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TabelEntitiy;
