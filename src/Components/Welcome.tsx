import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Welcome to the application.</h2>
      </div>
    </div>
  );
};

export default Welcome;
