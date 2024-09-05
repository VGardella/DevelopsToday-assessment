import Form from "./components/form";
import LoadingMessage from "./components/loading";
import { Suspense } from "react";

export default async function Home() {
  let carList;
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`
    ).then((res) => res.json());
    carList = data.Results;
  } catch (err) {
    return err;
  }

  const startYear = 2015;
  const currentYear = new Date().getFullYear();
  const yearList = [];
  for (let year = startYear; year <= currentYear; year++) yearList.push(year);

  return (
    <main className="main-container">
      <div className="header">
        <h1>Header Text</h1>
      </div>
      <Suspense fallback={<LoadingMessage />}>
        <div className="filter-container">
          <Form carList={carList} yearList={yearList} />
        </div>
      </Suspense>
    </main>
  );
}
