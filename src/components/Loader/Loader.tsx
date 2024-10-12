import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./Loader.scss";

export const Loader: React.FC = () => {
  return (
    <>
      <div className="container-loader">
        <RotatingLines
          visible={true}
          width="96"
          strokeColor="#4b0082"
          strokeWidth="5"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </>
  );
};
