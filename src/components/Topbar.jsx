import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white px-6 py-4 shadow-sm flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">John Doe</span>
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="profile"
          className="w-9 h-9 rounded-full border border-gray-300 object-cover"
        />
      </div>
    </div>
  );
};

export default Topbar;
