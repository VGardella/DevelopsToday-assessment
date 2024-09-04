import Dropdown from "./components/dropdown";
import Link from "next/link";

export default async function Home({ params }) {
  let carData;
  try {
    const data = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json").then((res) => res.json())
    carData = data.Results
  } catch (err) {
    return err;
  }

  const modelList = carData.map((item) => item = item.MakeName).sort();
  const startYear = 2015;
  const currentYear = new Date().getFullYear()
  const yearList = []
  for (let year = startYear; year <= currentYear; year++) yearList.push(year)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="header">
        <h1>Header Text</h1>
      </div>
      <div className="filter-container">
        <form className="dropdown-form" action="" method="GET">
          <div className="dropdown-container">
            <Dropdown values={modelList} dropName="car" text="Choose a model" />
            <Dropdown values={yearList} dropName="year" text="Choose a year" />
          </div>
          <button type="submit">
            <Link href="/result/[makeId]/[year]" />
          </button>
        </form>
      </div>
    </main>
    
  );
}