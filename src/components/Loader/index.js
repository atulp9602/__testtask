import React from "react";

const Loader = () => {
  return (
    <div className="text-center mt-5 text-secondary">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="ms-1 fs-3 text-secondary">Loading...</span>
    </div>
  );
};

export default Loader;
