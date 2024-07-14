"use client";
import Image from "next/image";
import React, { useState } from "react";

type ItemType = {
  id: number;
  name: string;
  age: number;
};

const App: React.FC = () => {
  const [arr, setArr] = useState<ItemType[]>([
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Mike", age: 30 },
    { id: 3, name: "Jane", age: 40 },
    { id: 4, name: "logo", age: 40 },
    { id: 5, name: "hello", age: 40 },
    { id: 6, name: "hame", age: 40 },
    { id: 7, name: "subh", age: 40 },
    { id: 8, name: "kabir", age: 40 },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [savedItems, setSavedItems] = useState<ItemType[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleSubmit = () => {
    const newSavedItems = arr.filter((item) => selectedItems.includes(item.id));
    setSavedItems(newSavedItems);
  };

  return (
    <>
    

    </>
  );
};

export default App;

