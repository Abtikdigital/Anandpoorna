import React, { useEffect, useState } from "react";

const GOLD = "#C57C2C";
const BG = "#FDF8EE";

const LoaderSVG = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      width: "100vw",
      height: "100vh",
      background: BG,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 1440 900"
      style={{ width: "100vw", height: "100vh", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="1440" height="900" fill={BG} />

      {/* Sun */}
      <circle cx="200" cy="180" r="60" fill={GOLD} opacity="0.15" />

      {/* Cityscape silhouette */}
      <g>
        {/* Buildings */}
        <rect x="200" y="600" width="80" height="200" fill={GOLD} opacity="0.8">
          <animate
            attributeName="y"
            from="900"
            to="600"
            dur="1.2s"
            begin="0s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="200"
            dur="1.2s"
            begin="0s"
            fill="freeze"
          />
        </rect>
        <rect x="320" y="500" width="100" height="300" fill={GOLD} opacity="0.7">
          <animate
            attributeName="y"
            from="900"
            to="500"
            dur="1.4s"
            begin="0.2s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="300"
            dur="1.4s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>
        <rect x="460" y="620" width="60" height="180" fill={GOLD} opacity="0.6">
          <animate
            attributeName="y"
            from="900"
            to="620"
            dur="1s"
            begin="0.4s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="180"
            dur="1s"
            begin="0.4s"
            fill="freeze"
          />
        </rect>
        <rect x="550" y="400" width="120" height="400" fill={GOLD} opacity="0.8">
          <animate
            attributeName="y"
            from="900"
            to="400"
            dur="1.6s"
            begin="0.6s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="400"
            dur="1.6s"
            begin="0.6s"
            fill="freeze"
          />
        </rect>
        <rect x="700" y="550" width="90" height="250" fill={GOLD} opacity="0.7">
          <animate
            attributeName="y"
            from="900"
            to="550"
            dur="1.2s"
            begin="0.8s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="250"
            dur="1.2s"
            begin="0.8s"
            fill="freeze"
          />
        </rect>
        <rect x="820" y="480" width="80" height="320" fill={GOLD} opacity="0.8">
          <animate
            attributeName="y"
            from="900"
            to="480"
            dur="1.4s"
            begin="1s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="320"
            dur="1.4s"
            begin="1s"
            fill="freeze"
          />
        </rect>
        <rect x="930" y="600" width="60" height="200" fill={GOLD} opacity="0.6">
          <animate
            attributeName="y"
            from="900"
            to="600"
            dur="1.1s"
            begin="1.2s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="200"
            dur="1.1s"
            begin="1.2s"
            fill="freeze"
          />
        </rect>
        <rect x="1020" y="520" width="100" height="280" fill={GOLD} opacity="0.7">
          <animate
            attributeName="y"
            from="900"
            to="520"
            dur="1.3s"
            begin="1.4s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to="280"
            dur="1.3s"
            begin="1.4s"
            fill="freeze"
          />
        </rect>
      </g>

      {/* Crane */}
      <g>
        {/* Crane tower */}
        <rect x="370" y="350" width="16" height="150" fill={GOLD} opacity="0.85" />
        {/* Crane arm */}
        <rect x="378" y="340" width="140" height="8" fill={GOLD} opacity="0.85">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 378 344"
            to="10 378 344"
            dur="1.5s"
            repeatCount="indefinite"
            direction="alternate"
          />
        </rect>
        {/* Crane hook */}
        <rect x="510" y="348" width="6" height="50" fill={GOLD} opacity="0.7">
          <animate
            attributeName="y"
            values="348;398;348"
            keyTimes="0;0.5;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="508" y="398" width="10" height="18" fill={GOLD} opacity="0.8">
          <animate
            attributeName="y"
            values="398;448;398"
            keyTimes="0;0.5;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* Company Name */}
      <text
        x="50%"
        y="200"
        textAnchor="middle"
        fontSize="56"
        fontWeight="bold"
        fill={GOLD}
        fontFamily="sans-serif"
        letterSpacing="4"
        opacity="0.92"
        style={{ textShadow: "0 2px 8px #fff5" }}
      >
        Anand Poorna
      </text>
      <text
        x="50%"
        y="260"
        textAnchor="middle"
        fontSize="36"
        fill={GOLD}
        fontFamily="sans-serif"
        letterSpacing="2"
        opacity="0.75"
      >
        Construction
      </text>
    </svg>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      {loading && <LoaderSVG />}
     
    </div>
  );
}
