import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({ id, placeholder, onChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className="w-full flex items-center gap-2 mb-3">
      <input
        id={id}
        className="flex-1 text-xl p-3 border-2 shadow-md rounded-md"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
