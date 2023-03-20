import React from "react";

function Map() {
  return (
    <div className="map">
      <h1 style={{ fontSize: "50px", margin: "5px auto", textAlign: "center" }}>
        HARİTALAR
      </h1>
      <iframe
        style={{
          width: "70vw",
          height: "50vh",
          display: "block",
          margin: "0 auto",
          borderRadius: "20px",
        }}
        src="https://maps.google.com/maps?q=adana%20m1&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}

export default Map;
