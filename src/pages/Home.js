import { useEffect, useState } from "react";
import PageNumberSelector from "../components/PageNumber";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import data from "../data.json";
import { Home, ScrollText, Box, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function App() {
  const [selectedStatus, setSelectedStatus] = useState("active");
  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [activeLink, setActiveLink] = useState(null);
  const [statusCounts, setStatusCounts] = useState({
    active: 0,
    pending: 0,
    expired: 0,
  });

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (status) => {
    setSelectedStatus(selectedStatus === status ? null : status);
    setTableData([]);
  };

  useEffect(() => {
    const counts = {
      active: data.filter((item) => item.status === "active").length,
      pending: data.filter((item) => item.status === "pending").length,
      expired: data.filter((item) => item.status === "expired").length,
    };
    setStatusCounts(counts);

    const filteredData = data.filter((item) => item.status === selectedStatus);
    setTableData(filteredData);
  }, [selectedStatus]);

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  return (
    <div className="flex">
      <div className="hidden md:block">
        <div className="bg-white items-center justify-center p-12 h-screen">
          <img className="mb-20 px-14" src="/logo.png" alt="Description" />
          <ul className="flex flex-col gap-12 cursor-pointer">
            <li
              className={`flex text-lg font-semibold gap-12 items-center  ${
                activeLink === "/" ? "text-purple-500" : "hover:text-purple-500"
              }`}
              onClick={() => setActiveLink("/home")}
            >
              <Home size={36} />
              <Link to="/">Home</Link>
            </li>
            <li
              className={`flex text-lg font-semibold gap-12 items-center ${
                activeLink === "/admin"
                  ? "text-purple-500"
                  : "hover:text-purple-500"
              }`}
              onClick={() => setActiveLink("/admin")}
            >
              <ScrollText size={36} />
              <Link to="/admin">Admin</Link>
            </li>
            <li
              className={`flex text-lg font-semibold gap-12 items-center ${
                activeLink === "/membership"
                  ? "text-purple-500"
                  : "hover:text-purple-500"
              }`}
              onClick={() => setActiveLink("/membership")}
            >
              <Box size={36} />
              <Link to="/membership">Membership</Link>
            </li>
            <li
              className={`flex text-lg font-semibold gap-12 mb-16 items-center ${
                activeLink === "/advocate"
                  ? "text-purple-500"
                  : "hover:text-purple-500"
              }`}
              onClick={() => setActiveLink("/advocate")}
            >
              <User size={36} />
              <Link to="/advocate">Advocate</Link>
            </li>
            <li
              className="flex text-lg font-semibold gap-12 items-center hover:text-purple-500"
              onClick={() => setActiveLink("/logout")}
            >
              <LogOut size={36} />
              Logout
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 w-72 ">
          <Sidebar />
        </div>
      )}
      <div className="p-5 bg-slate-100 w-full">
        <div className="p-5 flex justify-between">
          <div className="bg-white py-2 px-6 rounded-full w-60 h-14 flex justify-center items-center font-bold text-lg text-gray-500 relative">
            Association
            <div className="bg-stone-400 p-4 rounded-full text-white  w-16 h-16 absolute left-0 flex items-center justify-center">
              logo
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none">
              <svg
                className={`h-6 w-6 ${
                  isOpen ? "text-purple-600" : "text-black"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="p-5 py-20 font-bold text-3xl text-gray-500">
          Advocates
        </div>
        <div className="p-5">
          <div className="mb-[1px] lg:grid grid-cols-3">
            <button
              className={`justify-center flex gap-2 w-full py-2 text-lg border border-gray-300 lg:rounded-tl-lg ${
                selectedStatus === "active"
                  ? "bg-white text-black"
                  : "text-blue-500"
              }`}
              onClick={() => handleButtonClick("active")}
            >
              <div className="">Active Members</div>

              {selectedStatus !== "active" && (
                <div className="bg-purple-500 text-white px-1 rounded-md text-base">
                  {statusCounts.active}
                </div>
              )}
            </button>
            <button
              className={`justify-center flex gap-2 w-full py-2 text-lg border border-gray-300  ${
                selectedStatus === "pending"
                  ? "bg-white text-black"
                  : "text-blue-500"
              }`}
              onClick={() => handleButtonClick("pending")}
            >
              <div className="">Pending Request </div>
              {selectedStatus !== "pending" && (
                <div className="bg-purple-500 text-white px-1 rounded-md text-base">
                  {statusCounts.pending}
                </div>
              )}
            </button>
            <button
              className={`justify-center flex gap-2 w-full py-2 text-lg border border-gray-300  lg:rounded-tr-lg ${
                selectedStatus === "expired"
                  ? "bg-white text-black"
                  : "text-blue-500"
              }`}
              onClick={() => handleButtonClick("expired")}
            >
              <div className="">Membership Expired</div>
              {selectedStatus !== "expired" && (
                <div className="bg-purple-500 text-white px-1 rounded-md text-base">
                  {statusCounts.expired}
                </div>
              )}
            </button>
          </div>

          <Table data={tableData} />
          <div className="bg-white border-gray-300 flex justify-end px-4 py-2 rounded-b-lg shadow-lg">
            <PageNumberSelector />
            <div className="flex items-center">
              <button>
                <ChevronFirst size={20} color="#9E9E9E" />
              </button>
              <button>
                <ChevronLeft size={20} color="#9E9E9E" />
              </button>
              <button>
                <ChevronRight size={20} color="#9E9E9E" />
              </button>
              <button>
                <ChevronLast size={20} color="#9E9E9E" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
