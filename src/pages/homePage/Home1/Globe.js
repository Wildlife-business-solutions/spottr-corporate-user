import React, { useRef, useEffect } from "react";
import ReactGlobe from "react-globe.gl";
import earth from "../../../assets/map1.jpg";

const N = 15;
const arcsData = [...Array(N).keys()].map((_, index) => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ["red", "white", "blue", "green"][Math.round(Math.random() * 5)],
    ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  ],
}));

function Globe({ width, height }) {
  const globeEl = useRef(true);

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 10;
  });
  return (
    <div className="">
      <ReactGlobe
        ref={globeEl}
        backgroundColor="#102954"
        globeImageUrl={earth}
        width={width || 500}
        height={height || 500}
        arcsData={arcsData}
        arcColor={"color"}
        arcStroke={1.2}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => 4000}
        onArcClick={(arcProps) => {
          window.open(arcProps.endpoint);
        }}
      />
    </div>
  );
}

export default Globe;
