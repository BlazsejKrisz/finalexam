import React from "react";

const CatCard = ({ cat }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-40 object-cover object-center"
        src={cat.image}
        alt={cat.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
        <p className="text-gray-700">{cat.description}</p>
      </div>
    </div>
  );
};

export default CatCard;
