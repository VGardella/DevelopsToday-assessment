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
    <main class="h-full w-full max-w-3xl mx-auto flex flex-col justify-center items-center">
      <div class="w-full">
        <div class="py-10 text-center bg-pink-700 rounded-t-xl leading-10 text-white font-sans text-3xl font-semibold">
          <h1>Welcome to Dev&apos;s car dealership!</h1>
        </div>
        <Suspense fallback={<LoadingMessage />}>
          <div class="h-72 bg-white shadow-2xl rounded-b-xl p-10">
            <p class="text-center font-semibold">
              Need more information about any of our models? <br />
              Choose from the menus bellow!
            </p>
            <Form carList={carList} yearList={yearList} />
          </div>
        </Suspense>
      </div>
    </main>
  );
}
