"use client"
import React, { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const initialItems = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    setItems(initialItems);
  }, []);

  return (
    <div className="container mx-auto px-12 py-12 min-h-screen bg-black">
      <h1 className="text-7xl font-bold mb-20 text-center">Let's start ROLLING</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="mb-7 bg-pink-200 text-black font-bold rounded-xl p-2"
          >
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
}