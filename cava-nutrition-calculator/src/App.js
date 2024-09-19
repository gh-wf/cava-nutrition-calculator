import React from 'react';
import CavaNutritionCalculator from './CavaNutritionCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-center my-4">CAVA Nutrition Calculator</h1>
      </header>
      <main>
        <CavaNutritionCalculator />
      </main>
      <footer className="text-center mt-8 text-gray-500">
        <p>© 2023 CAVA Nutrition Calculator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
