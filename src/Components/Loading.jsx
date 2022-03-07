import React from 'react';

const Loading = ({ className }) => {
  return (
    <div
      className={`flex justify-center items-center align-middlew-full h-full min-h-screen m-auto ${className}`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
    </div>
  );
};

export default Loading;
