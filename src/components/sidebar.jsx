// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-8">2k24</h1>
      <nav className="space-y-6">
        <a href="#dashboard" className="flex items-center space-x-2">
          <span>📊</span>
          <span>Dashboard</span>
        </a>
        <a href="#event-details" className="flex items-center space-x-2">
          <span>📄</span>
          <span>Event Details</span>
        </a>
        <a href="#update-scores" className="flex items-center space-x-2">
          <span>📝</span>
          <span>Update Scores</span>
        </a>
        <a href="#rankings" className="flex items-center space-x-2">
          <span>🏆</span>
          <span>Rankings</span>
        </a>
        <a href="#registrations" className="flex items-center space-x-2">
          <span>📝</span>
          <span>Registrations</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
