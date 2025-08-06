import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('blue');

  const handleChangeColor = () => {
    setBgColor('pink');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={handleChangeColor} style={{ marginBottom: '1rem' }}>
        Change SVG Background to Pink
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
