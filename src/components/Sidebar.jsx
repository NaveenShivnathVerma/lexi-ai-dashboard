import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-full px-6 py-8">
      <h2 className="text-2xl font-extrabold text-indigo-700 mb-10 tracking-wide">
        Lexi AI
      </h2>
      <ul className="space-y-6 text-sm font-medium text-gray-600">
        <li className="text-indigo-600 font-semibold">Workspaces</li>
        <li className="hover:text-indigo-500 cursor-pointer">Team Management</li>
        <li className="hover:text-indigo-500 cursor-pointer">Billing & Plans</li>
        <li className="hover:text-indigo-500 cursor-pointer">Settings</li>
        <li className="hover:text-indigo-500 cursor-pointer">Contact Admin</li>
      </ul>
    </div>
  );
};

export default Sidebar;
