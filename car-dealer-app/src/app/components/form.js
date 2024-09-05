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
    <form className="dropdown-form" onSubmit={handleSubmit}>
      <div className="selectors">
        <div className="dropdown-container">
          <label htmlFor="car">Car model:</label>
          <Dropdown
            values={modelList}
            dropName="car"
            text="Choose a model"
            onChange={(e) => setSelectedModel(e.target.value)}
          />
        </div>
        <div className="dropdown-container">
          <label htmlFor="year">Year:</label>
          <Dropdown
            values={yearList}
            dropName="year"
            text="Choose a year"
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" disabled={!selectedYear || !selectedModel}>
        Next
      </button>
    </form>
  );
}
