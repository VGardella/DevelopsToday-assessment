import { Suspense } from "react";
import LoadingMessage from "@/app/components/loading";

function NoResults({ makeId, year }) {
  return (
    <div className="message">
      <h2>
        Sorry! We could&apos;t find information about this model (Car ID:{" "}
        {makeId}, year: {year})
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
    <div className="results">
      {carData.Results.length === 0 ? (
        <NoResults makeId={makeId} year={year} />
      ) : (
        <div className="result-container">
          <h1>{`Name: ${carData.Results[0]["Make_Name"]} | ID: ${carData.Results[0]["Make_ID"]}`}</h1>
          <table className="result-table">
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
