import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Topbar />
        <main className="p-4 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
