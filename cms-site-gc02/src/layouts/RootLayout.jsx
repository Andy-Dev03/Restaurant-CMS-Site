import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
      <Sidebar />

      {/* Konten kanan scrollable */}
      <div className="col-span-3 bg-white p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
