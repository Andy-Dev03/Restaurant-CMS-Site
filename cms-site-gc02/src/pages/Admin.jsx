import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import TabelEntitiy from "../components/TabelEntity";

const Admin = () => {
  // Exist the list or edit
  const [showNHide, setShowNHide] = useState("listCuisines");

  // Form penampung cuisine per id
  const [formCuisine, setFormCuisine] = useState(null);

  // Get Cuisines
  const [getCuisines, setCuisines] = useState([]);

  const fetchCuisines = async () => {
    const token = localStorage.getItem("accessToken");

    const { data } = await axios.get("http://localhost:3000/cuisines", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCuisines(data.data);
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen overflow-y-auto">
        {showNHide === "listCuisines" && (
          <TabelEntitiy
            getCuisines={getCuisines}
            fetchCuisines={fetchCuisines}
            setShowNHide={setShowNHide}
            setFormCuisine={setFormCuisine}
          />
        )}
        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Edit Entity</h2>
            <p className="text-gray-600">Update your data to the databased</p>
          </div>
          <Form
            showNHide={showNHide}
            setShowNHide={setShowNHide}
            setFormCuisine={setFormCuisine}
            formCuisine={formCuisine}
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
