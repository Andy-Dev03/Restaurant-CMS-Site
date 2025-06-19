import { useState } from "react";

import Login from "../../cms-site-gc02/src/pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import Create from "../../cms-site-gc02/src/pages/Create.jsx";
import Upload from "./pages/Upload.jsx";
import Add from "./pages/Add.jsx";

function App() {
  return (
    <>
      <Login />
      <Admin />
      <Create />
      <Upload />
      <Add />
    </>
  );
}

export default App;
