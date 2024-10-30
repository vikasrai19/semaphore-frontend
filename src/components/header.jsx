// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-xl font-semibold">User Name</h2>
        <p className="text-gray-600">User Role</p>
      </div>
      <div className="flex space-x-4">
        <span>🔔</span>
        <span>🔄</span>
      </div>
    </header>
  );
};

export default Header;
