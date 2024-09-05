"use client";
import { useState } from "react";

export default function Dropdown({ values, dropName, text, onChange }) {
  return (
    <div id="main">
      <select className="dropdown" name={dropName} onChange={onChange}>
        <option value="">{text}</option>
        {values.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}