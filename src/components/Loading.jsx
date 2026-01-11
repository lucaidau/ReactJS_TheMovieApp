import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-40">
      <p className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></p>
      <p className="text-txt-secondary font-medium text-sm mt-2">Loading...</p>
    </div>
  );
};

export default Loading;
