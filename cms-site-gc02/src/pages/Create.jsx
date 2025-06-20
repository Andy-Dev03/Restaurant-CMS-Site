import { useState } from "react";

import Form from "../components/Form";
const Create = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen overflow-y-auto">
        <div className="bg-white col-span-3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Create New Entity
            </h2>
            <p className="text-gray-600">Add a new entity to the Database</p>
          </div>

          <Form />
        </div>
      </div>
    </>
  );
};

export default Create;
