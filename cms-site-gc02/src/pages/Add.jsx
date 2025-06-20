import { useState } from "react";
import FormUser from "../components/FormUser";

const Add = () => {
  // Post new User
  const [formAddUser, setFormAddUser] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
  });

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
          <FormUser formAddUser={formAddUser} setFormAddUser={setFormAddUser} />
        </div>
      </div>
    </>
  );
};

export default Add;
