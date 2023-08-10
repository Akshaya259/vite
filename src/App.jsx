import React, { useState } from 'react';
import FlowerA from './FlowerA';
import FlowerB from './FlowerB';

function App() {
  const [showFlowerA, setShowFlowerA] = useState(true);

  const toggleFlower = () => {
    setShowFlowerA(!showFlowerA);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Flower Showcase</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleFlower}
      >
        Flower
      </button>

      <div className="mt-4">
        {showFlowerA ? <FlowerA /> : <FlowerB />}
      </div>
    </div>
  );
}

export default App;
