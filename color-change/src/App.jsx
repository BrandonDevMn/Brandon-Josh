import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('currentColor');

  const handleChangeColor = () => {
    setBgColor('pink');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={handleChangeColor} style={{ marginBottom: '1rem' }}>
        Change SVG Background to Pink
      </button>
      <svg
        version="1.1"
        id="svg1"
        width="300"
        height="90"
        viewBox="0 0 892 264"
        style={{ marginTop: '1rem', maxWidth: '300px', height: 'auto', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs id="defs1" />
        <rect width="100%" height="100%" fill={bgColor} />
        <g inkscapeGroupmode="layer" inkscapeLabel="Image" id="g1">
          <image
            width="892"
            height="264"
            preserveAspectRatio="none"
            style={{ imageRendering: 'optimizeQuality' }}
            xlinkHref="/assets/LogoOnly.svg"
          />
        </g>
      </svg>
    </div>
  );
}

export default App;
