import React from "react";
import { RotatingLines } from "react-loader-spinner";

const FullPageLoader = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 h-screen w-screen z-[2000] flex justify-center items-center">
      <div>
        <RotatingLines
          strokeColor="#BA68C8"
          strokeWidth="5"
          animationDuration="0.75"
          width="85"
          visible={true}
        />
      </div>
    </div>
  );
};

export default FullPageLoader;
