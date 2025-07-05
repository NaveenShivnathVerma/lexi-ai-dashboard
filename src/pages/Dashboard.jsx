import React, { useState } from "react";
import DashboardCard from "../components/DashboardCard";
import WorkspaceCard from "../components/WorkspaceCard";
import CreateWorkspaceModal from "../components/CreateWorkspaceModal";

const Dashboard = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addWorkspace = (data) => {
    setWorkspaces([...workspaces, data]);
  };

  return (
    <div>
      {/* 🟦 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard title="Total Workspaces" value={workspaces.length} />
        <DashboardCard title="Contracts Signed" value="12" />
        <DashboardCard title="Upcoming Hearings" value="3" />
      </div>

      {/* 🔘 Header + Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Your Workspaces</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          + Create New Workspace
        </button>
      </div>

      {/* 🗂️ Workspace Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((ws, index) => (
          <WorkspaceCard key={index} workspace={ws} />
        ))}
      </div>

      {/* 🧾 Modal */}
      <CreateWorkspaceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={addWorkspace}
      />
    </div>
  );
};

export default Dashboard;
