import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="bubbles" color="#cacaca" width="5%" />
      </div>
    </>
  );
}

export default Loading;