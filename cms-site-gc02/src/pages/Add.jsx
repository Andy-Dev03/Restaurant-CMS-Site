import FormUser from "../components/FormUser";
import Toastify from "toastify-js";
import axios from "axios";
const Add = () => {
  // Post new User
  const postNewUser = async (event, formAddUser) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/add-user",
        formAddUser,
        {
          headers: { Authorization: `Bearer ${localStorage.accessToken}` },
        }
      );

      Toastify({
        text: `Success add ${data.data.username} to the Staff`,
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
      const errorData = error.response?.data?.error?.message;
      let errorText;

      if (Array.isArray(errorData)) {
        errorText = errorData[0];
      } else if (typeof errorData === "string") {
        errorText = errorData;
      }

      Toastify({
        text: errorText,
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen overflow-y-auto">
        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Add New User</h2>
            <p className="text-gray-600">
              Register a new staff to the Database
            </p>
          </div>
          <FormUser postNewUser={postNewUser} />
        </div>
      </div>
    </>
  );
};

export default Add;
