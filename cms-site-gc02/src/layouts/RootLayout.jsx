import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen overflow-y-auto">
      <Sidebar />

      {/* Konten kanan scrollable */}
      <div className="col-span-3 bg-white overflow-y-auto max-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
