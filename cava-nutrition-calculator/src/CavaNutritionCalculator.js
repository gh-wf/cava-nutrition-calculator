import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from './components/ui/card';


const nutritionData = {
  // Greens + Grains
  "Brown Rice": { calories: 310, fat: 10, carbs: 48, protein: 8 },
  "Saffron Basmati Rice": { calories: 290, fat: 6, carbs: 54, protein: 6 },
  "Black Lentils": { calories: 260, fat: 7, carbs: 37, protein: 17 },
  "SuperGreens": { calories: 40, fat: 0, carbs: 8, protein: 3 },
  "Arugula": { calories: 20, fat: 0, carbs: 3, protein: 2 },
  "Baby Spinach": { calories: 20, fat: 0, carbs: 3, protein: 3 },
  "Romaine": { calories: 20, fat: 0, carbs: 4, protein: 1 },
  "SplendidGreens": { calories: 20, fat: 0, carbs: 4, protein: 1 },
  // Mains
  "Braised Lamb": { calories: 210, fat: 12, carbs: 2, protein: 24 },
  "Grilled Chicken": { calories: 250, fat: 13, carbs: 3, protein: 28 },
  "Falafel": { calories: 350, fat: 26, carbs: 24, protein: 6 },
  "Grilled Steak": { calories: 160, fat: 8, carbs: 1, protein: 23 },
  "Harissa Honey Chicken": { calories: 260, fat: 14, carbs: 7, protein: 26 },
  "Roasted Vegetables": { calories: 100, fat: 4.5, carbs: 14, protein: 3 },
  "Spicy Lamb Meatballs": { calories: 300, fat: 22, carbs: 3, protein: 24 },
  // Toppings
  "Shredded Romaine": { calories: 5, fat: 0, carbs: 1, protein: 0 },
  "Pita Crisps": { calories: 90, fat: 4.5, carbs: 10, protein: 1 },
  "Cabbage Slaw": { calories: 35, fat: 3, carbs: 2, protein: 0 },
  "Tomato + Onion": { calories: 20, fat: 2, carbs: 2, protein: 0 },
  "Persian Cucumber": { calories: 15, fat: 1, carbs: 1, protein: 0 },
  "Tomato + Cucumber": { calories: 10, fat: 0, carbs: 2, protein: 0 },
  "Kalamata Olives": { calories: 50, fat: 4.5, carbs: 2, protein: 0 },
  "Fiery Broccoli": { calories: 35, fat: 2.5, carbs: 2, protein: 1 },
  "Pickled Onions": { calories: 20, fat: 0, carbs: 5, protein: 0 },
  "Salt-Brined Pickles": { calories: 5, fat: 0, carbs: 0, protein: 0 },
  "Crumbled Feta": { calories: 35, fat: 2.5, carbs: 0, protein: 3 },
  "Fire-Roasted Corn": { calories: 45, fat: 3, carbs: 5, protein: 1 },
  "Avocado": { calories: 160, fat: 15, carbs: 9, protein: 2 },
  // Dips + Spreads
  "Tzatziki": { calories: 35, fat: 2.5, carbs: 1, protein: 2 },
  "Hummus": { calories: 45, fat: 2.5, carbs: 4, protein: 1 },
  "Roasted Eggplant": { calories: 50, fat: 4.5, carbs: 2, protein: 0 },
  "Crazy Feta": { calories: 70, fat: 6, carbs: 1, protein: 3 },
  "Harissa": { calories: 70, fat: 6, carbs: 5, protein: 1 },
  "Red Pepper Hummus": { calories: 30, fat: 1, carbs: 4, protein: 1 },
  // Dressings
  "Balsamic Date Vinaigrette": { calories: 60, fat: 4, carbs: 7, protein: 0 },
  "Yogurt Dill": { calories: 30, fat: 2, carbs: 1, protein: 2 },
  "Lemon-Herb Tahini": { calories: 70, fat: 6, carbs: 4, protein: 2 },
  "Tahini Caesar": { calories: 90, fat: 8, carbs: 3, protein: 2 },
  "Greek Vinaigrette": { calories: 130, fat: 14, carbs: 1, protein: 0 },
  "Skhug": { calories: 80, fat: 9, carbs: 1, protein: 0 },
  "Hot Harissa Vinaigrette": { calories: 70, fat: 7, carbs: 2, protein: 0 },
  "Garlic Dressing": { calories: 180, fat: 20, carbs: 0, protein: 0 },
};

const CavaNutritionCalculator = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalNutrition, setTotalNutrition] = useState({ calories: 0, fat: 0, carbs: 0, protein: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const newTotalNutrition = selectedIngredients.reduce((acc, ingredient) => {
      const nutrition = nutritionData[ingredient];
      return {
        calories: acc.calories + nutrition.calories,
        fat: acc.fat + nutrition.fat,
        carbs: acc.carbs + nutrition.carbs,
        protein: acc.protein + nutrition.protein,
      };
    }, { calories: 0, fat: 0, carbs: 0, protein: 0 });
    setTotalNutrition(newTotalNutrition);
  }, [selectedIngredients]);

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients(prev => {
      const newSelected = prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient];
      console.log('Selected ingredients:', newSelected);
      return newSelected;
    });
  };

  const filteredIngredients = Object.keys(nutritionData).filter(ingredient =>
    ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">CAVA Nutrition Calculator</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 border-b p-4">
                <h2 className="text-2xl font-semibold text-gray-700">Select Ingredients</h2>
                <input
                  type="text"
                  placeholder="Search ingredients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </CardHeader>
              <CardContent className="max-h-96 overflow-y-auto p-4">
                <div className="flex flex-wrap">
                  {filteredIngredients.map((ingredient) => (
                    <button
                      key={ingredient}
                      onClick={() => toggleIngredient(ingredient)}
                      className="m-1 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                      style={{
                        backgroundColor: selectedIngredients.includes(ingredient) ? '#0891b2' : '#e2e8f0',
                        color: selectedIngredients.includes(ingredient) ? 'white' : '#1f2937',
                      }}
                    >
                      {ingredient}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 border-b p-4">
                <h2 className="text-2xl font-semibold text-gray-700">Nutrition Facts</h2>
              </CardHeader>
              <CardContent className="p-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Ingredient</th>
                      <th className="border p-2 text-right">Calories</th>
                      <th className="border p-2 text-right">Fat (g)</th>
                      <th className="border p-2 text-right">Carbs (g)</th>
                      <th className="border p-2 text-right">Protein (g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedIngredients.map(ingredient => (
                      <tr key={ingredient} className="hover:bg-gray-50">
                        <td className="border p-2">{ingredient}</td>
                        <td className="border p-2 text-right">{nutritionData[ingredient].calories.toFixed(1)}</td>
                        <td className="border p-2 text-right">{nutritionData[ingredient].fat.toFixed(1)}</td>
                        <td className="border p-2 text-right">{nutritionData[ingredient].carbs.toFixed(1)}</td>
                        <td className="border p-2 text-right">{nutritionData[ingredient].protein.toFixed(1)}</td>
                      </tr>
                    ))}
                    <tr className="font-bold bg-gray-200">
                      <td className="border p-2">Total</td>
                      <td className="border p-2 text-right">{totalNutrition.calories.toFixed(1)}</td>
                      <td className="border p-2 text-right">{totalNutrition.fat.toFixed(1)}</td>
                      <td className="border p-2 text-right">{totalNutrition.carbs.toFixed(1)}</td>
                      <td className="border p-2 text-right">{totalNutrition.protein.toFixed(1)}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CavaNutritionCalculator;
