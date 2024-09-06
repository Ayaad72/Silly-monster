// components/Loader.js
import React from "react";
import Image from "next/image";

const Loader = () => {
  const loaderStyle = {
    width: "100%",
    height: "100vh",
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={loaderStyle}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
