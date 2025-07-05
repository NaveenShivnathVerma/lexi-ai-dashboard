import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center border">
      <h3 className="text-sm text-gray-500 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-indigo-700">{value}</p>
    </div>
  );
};

export default DashboardCard;
