const Create = () => {
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
              className="flex items-center px-3 py-2 rounded-lg bg-gray-800 "
            >
              <i className="fa-solid fa-plus mr-3"></i>Create Entity
            </a>

            <a
              href=""
              className="flex items-center px-3 py-2 rounded-lg bg-gray-800 "
            >
              <i className="fa-solid fa-pen-to-square mr-3"></i>Edit Entity
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

        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Create New Entity
            </h2>
            <p className="text-gray-600">Add a new entity to the Database</p>
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
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
              >
                Create Entity
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Edit Entity</h2>
            <p className="text-gray-600">Edit the entity</p>
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
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
              >
                Update Entity
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
