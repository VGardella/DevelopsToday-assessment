"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "./dropdown";

export default function Form({ carList, yearList }) {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const carData = carList.find((item) => item.MakeName === selectedModel);
    router.push(`/result/${carData.MakeId}/${selectedYear}/`);
  }

  const modelList = carList.map((item) => item.MakeName).sort();

  return (
    <form class="flex flex-col h-40 justify-between" onSubmit={handleSubmit}>
      <div class="grid grid-cols-2 py-5 gap-10">
        <div class="flex flex-col">
          <label htmlFor="car">Car model:</label>
          <Dropdown
            values={modelList}
            dropName="car"
            text="Choose a model"
            onChange={(e) => setSelectedModel(e.target.value)}
          />
        </div>
        <div class="flex flex-col">
          <label htmlFor="year">Year:</label>
          <Dropdown
            values={yearList}
            dropName="year"
            text="Choose a year"
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </div>
      </div>
      <button
        class="h-10 w-20 bg-pink-700 hover:bg-pink-800 self-center rounded-lg cursor-pointer text-white"
        type="submit"
        disabled={!selectedYear || !selectedModel}
      >
        Next
      </button>
    </form>
  );
}
