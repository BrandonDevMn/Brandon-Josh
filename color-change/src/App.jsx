import React, { useState } from 'react';


function App() {
  const colors = ['#add8e6', '#ffb6c1']; // light blue, light pink
  const [colorIndex, setColorIndex] = useState(0);
  const bgColor = colors[colorIndex];

  const handleChangeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={handleChangeColor} style={{ marginBottom: '1rem' }}>
        Change SVG Background Color
      </button>
      <div
        style={{
          backgroundColor: bgColor,
          display: 'inline-block',
          padding: '1rem',
          borderRadius: '1rem',
          marginTop: '1rem',
        }}
      >
        <img
          src="/assets/text.svg"
          alt="Text SVG"
          style={{ width: '300px', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
  );
}

export default App;
