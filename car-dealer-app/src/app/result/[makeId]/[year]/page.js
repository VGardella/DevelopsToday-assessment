import { Suspense } from "react";
import LoadingMessage from "@/app/components/loading";

function NoResults({ makeId, year }) {
  return (
    <div class="w-full max-w-3xl mx-auto my-auto text-center flex flex-col gap-3 ">
      <h2 class=" text-3xl">
        Sorry! We could&apos;t find information about this model
        <br />
        (Car ID: {makeId}, year: {year})
      </h2>
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
    <div class="flex h-full">
      {carData.Results.length === 0 ? (
        <NoResults makeId={makeId} year={year} />
      ) : (
        <div class="">
          <h1>{`Name: ${carData.Results[0]["Make_Name"]} | ID: ${carData.Results[0]["Make_ID"]}`}</h1>
          <table class="">
            <thead>
              <tr>
                {headers.map((item) => {
                  return <th key={item}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {carData.Results.map((result, index) => (
                <tr key={index}>
                  <td>{result.Model_ID}</td>
                  <td>{result.Model_Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
