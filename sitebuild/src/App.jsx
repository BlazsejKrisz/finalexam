import React from "react";
import Header from "./Components/Header";
import CatCard from "./Components/CatCard";
import "./index.css";
const cats = [
  {
    id: 1,
    name: "Mittens",
    image: "https://cdn2.thecatapi.com/images/in-CD5LH5.jpg",
    description: "A very cute and fluffy cat.",
  },
  {
    id: 2,
    name: "Whiskers",
    image: "https://cdn2.thecatapi.com/images/5txKBK89Y.jpg",
    description: "Loves to play with yarn.",
  },
  {
    id: 3,
    name: "Shadow",
    image: "https://cdn2.thecatapi.com/images/Z5Wd0A-r_.jpg",
    description: "Enjoys napping in the sun.",
  },
];

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
