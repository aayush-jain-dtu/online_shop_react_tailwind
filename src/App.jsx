import { useState } from "react";
import './App.css';
import canvas_art from './assets/images/canvas_art.jpg';
import leather_shoes from './assets/images/leather_shoes.jpg';
import minimal_wooden_chair from './assets/images/minimal_wooden_chair.jpg';
import modern_lamp from './assets/images/modern_lamp.jpg';
import vintage_watch from './assets/images/vintage_watch.jpg';





const sampleProducts = [
  {
    id: 1,
    title: "Minimal Wooden Chair",
    category: "Furniture",
    image: minimal_wooden_chair,
    price: "$120",
  },
  {
    id: 2,
    title: "Modern Lamp",
    category: "Lighting",
    image: modern_lamp,
    price: "$89",
  },
  {
    id: 3,
    title: "Vintage Watch",
    category: "Accessories",
    image: vintage_watch,
    price: "$230",
  },
  {
    id: 4,
    title: "Leather Shoes",
    category: "Footwear",
    image: leather_shoes,
    price: "$150",
  },
  {
    id: 5,
    title: "Canvas Art",
    category: "Decor",
    image: canvas_art,
    price: "$75",
  },
];

const categories = ["All", "Furniture", "Lighting", "Accessories", "Footwear", "Decor"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Aayush Decor</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">Shop</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>

      <div className="flex p-6">
        {/* Sidebar */}
        <aside className="w-1/4 pr-6">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer hover:text-indigo-600 ${
                  selectedCategory === cat ? "font-bold text-indigo-600" : ""
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <main className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-indigo-600 font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
