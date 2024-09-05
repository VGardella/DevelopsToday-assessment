import { Suspense } from "react";
import LoadingMessage from "@/app/components/loading";

function NoResults({ makeId, year }) {
  return (
    <div class="w-full max-w-3xl mx-auto my-auto text-center flex flex-col gap-3">
      <h2 class=" text-3xl">
        Sorry! We could&apos;t find information about this model
        <br />
        (Car ID: {makeId}, year: {year})
      </h2>
      <a
        href="/"
        class="h-10 w-56 bg-pink-700 hover:bg-pink-800 self-center rounded-lg cursor-pointer text-white flex items-center justify-center"
      >
        Go to Home Page! &rsaquo;
      </a>
    </div>
  );
}

export default async function Result({ params }) {
  const { makeId, year } = params;
  let carData;
  try {
    carData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    ).then((res) => res.json());
  } catch (err) {
    return err.message;
  }
  const headers = ["Model ID", "Model Name"];

  return (
    <div class="h-full w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
      {carData.Results.length === 0 ? (
        <NoResults makeId={makeId} year={year} />
      ) : (
        <div class="w-full my-40">
          <div class="py-10 text-center bg-pink-700 rounded-t-xl leading-10 text-white font-sans text-3xl font-semibold">
            <h1>{`Name: ${carData.Results[0]["Make_Name"]} | ID: ${carData.Results[0]["Make_ID"]} | Year: ${year}`}</h1>
          </div>
          <div class="h-72 bg-white shadow-2xl rounded-b-xl p-10 h-auto">
            <table class="shadow-lg rounded-lg overflow-hidden table-fixed text-xl w-full">
              <thead>
                <tr class="bg-gray-200">
                  {headers.map((item) => {
                    return (
                      <th key={item} class="w-auto py-2">
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody class="">
                {carData.Results.map((result, index) => (
                  <tr key={index}>
                    <td class="border-b border-gray-200 py-2 px-4">
                      {result.Model_ID}
                    </td>
                    <td class="border-b border-gray-200 py-2 px-4">
                      {result.Model_Name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="pt-10 flex justify-center">
              <a
                href="/"
                class="h-10 w-56 bg-pink-700 hover:bg-pink-800 self-center rounded-lg cursor-pointer text-white flex items-center justify-center"
              >
                Go to Home Page! &rsaquo;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
