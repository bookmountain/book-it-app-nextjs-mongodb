import React from "react";

const Loader = (props) => {
  return (
    <div className="d-flex justify-content-center center-loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
