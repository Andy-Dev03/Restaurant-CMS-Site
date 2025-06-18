import axios from "axios";
import { useState, useEffect } from "react";

const Form = ({ showNHide, setShowNHide }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: "",
  });

  const [getCategories, setCategories] = useState([]);

  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const getTheCategories = async () => {
      const { data } = await axios.get("http://localhost:3000/categories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(data.data);
    };

    getTheCategories();
  }, []);

  const postNewCuisine = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3000/cuisines", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setShowNHide("listCuisines");
  };

  const btnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const backToList = (event) => {
    event.preventDefault();
    setShowNHide("listCuisines");
  };

  return (
    <>
      <form className="space-y-6" onSubmit={postNewCuisine}>
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
              onChange={btnChange}
              value={formData.name}
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
              onChange={btnChange}
              value={formData.price}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="imgUrl"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imgUrl"
              name="imgUrl"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="https://example.com/image.jpg"
              onChange={btnChange}
              value={formData.imgUrl}
            />
          </div>

          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="categoryId"
              name="categoryId"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              onChange={btnChange}
              value={formData.categoryId}
            >
              <option value="" disabled>
                Choose your category
              </option>
              {getCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
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
            value={formData.description}
            onChange={btnChange}
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          {showNHide === "editCuisines" && (
            <button
              type="button"
              className="px-4 py-2 border border-black text-black font-semibold rounded-md hover:bg-red-600/70 hover:text-white"
              onClick={backToList}
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
          >
            Create Entity
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
