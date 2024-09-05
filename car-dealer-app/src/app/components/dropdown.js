"use client";

export default function Dropdown({ values, dropName, text, onChange }) {
  return (
    <select
      name={dropName}
      onChange={onChange}
      class="bg-gray-200 p-2 rounded-lg cursor-pointer shadow-md mb-4"
    >
      <option value="">{text}</option>
      {values.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}
