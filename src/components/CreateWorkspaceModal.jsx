import React, { useState } from "react";

const CreateWorkspaceModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [opponent, setOpponent] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    if (title && client) {
      onCreate({ title, client, opponent, status });
      onClose();
      setTitle("");
      setClient("");
      setOpponent("");
      setStatus("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Create New Workspace
        </h2>

        {/* 🗂️ Upload UI */}
        <div className="border-2 border-dashed border-gray-300 p-4 rounded mb-4 text-center text-sm text-gray-500">
          Drag & drop your case file here<br />
          <span className="text-xs text-gray-400">(File upload not implemented)</span>
        </div>

        {/* 🔽 Divider */}
        <div className="text-center my-2 text-gray-500">OR</div>

        {/* 🔤 Input Fields */}
        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Client Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Opponent Name"
          value={opponent}
          onChange={(e) => setOpponent(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Status / Timeline"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        {/* 🤖 Summariser */}
        <button className="w-full mb-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 font-medium">
          Run AI Summariser
        </button>

        {/* 🎯 Action Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Create
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateWorkspaceModal;
