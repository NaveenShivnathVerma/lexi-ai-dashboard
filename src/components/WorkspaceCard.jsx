import React from "react";

const WorkspaceCard = ({ workspace }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-100 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {workspace.title}
      </h3>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium text-gray-600">Client:</span> {workspace.client}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium text-gray-600">Opponent:</span> {workspace.opponent || "—"}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-medium text-gray-600">Status:</span> {workspace.status || "N/A"}
      </p>
    </div>
  );
};

export default WorkspaceCard;
