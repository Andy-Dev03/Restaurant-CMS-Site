import Form from "../components/Form";

const Edit = () => {
  return (
    <>
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Edit Entity</h2>
          <p className="text-gray-600">Update your data to the databased</p>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Edit;
