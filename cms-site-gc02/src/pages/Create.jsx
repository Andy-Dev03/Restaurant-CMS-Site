import axios from "axios";
import { useNavigate } from "react-router";
import Form from "../components/Form";
import Toastify from "toastify-js";
const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/cuisines",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      );

      navigate("/");
      Toastify({
        text: data.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "custom-toast",
        style: {
          background: "#34D399",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
          paddingRight: "2.5rem",
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
        className: "custom-toast",
        style: {
          background: "#F87171",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
          paddingRight: "2.5rem",
        },
      }).showToast();
    }
  };

  return (
    <>
      <div className=" min-h-screen overflow-y-auto pb-12 md:pb-0">
        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Create New Entity
            </h2>
            <p className="text-gray-600">Add a new entity to the Database</p>
          </div>

          <Form
            propName="Create Entity"
            handleSubmit={handleSubmit}
            isEdit={false}
          />
        </div>
      </div>
    </>
  );
};

export default Create;
