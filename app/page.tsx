"use client";
import { useState } from "react";

type CountryResponse = {
  country: string;
  capital: string;
  flag?: string;
};

export default function Home() {
  const [data, setData] = useState<CountryResponse | null>(null);

  async function fetchCountry() {
    const res = await fetch("api/random");
    const json = await res.json();
    setData(json);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl md:text-6xl font-mono font-bold mb-12 text-center p-8">
        Random Country & Capital Picker
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Country */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <p className="text-2xl font-semibold">Country: </p>
          <p className="text-3xl md:text-4xl font-bold">
            {data?.country || "---"}
          </p>

          {data?.country && (
            <button
              onClick={() =>
                window.open(
                  `https://en.wikipedia.org/wiki/${encodeURIComponent(
                    data.country
                  )}`,
                  "_blank"
                )
              }
              className="text-blue-600 underline hover:cursor-pointer m-4"
            >
              Wikipedia
            </button>
          )}

          {data?.country && (
            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${encodeURIComponent(
                    data.country
                  )}`,
                  "_blank"
                )
              }
              className="text-blue-600 underline hover:cursor-pointer mx-4"
            >
              Google
            </button>
          )}
        </div>

        {/* Capital */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <p className="text-2xl font-semibold">Capital: </p>
          <p className="text-3xl md:text-4xl font-bold">
            {data?.capital || "---"}
          </p>

          {data?.capital && (
            <button
              onClick={() =>
                window.open(
                  `https://en.wikipedia.org/wiki/${encodeURIComponent(
                    data.capital
                  )}`,
                  "_blank"
                )
              }
              className="text-blue-600 underline hover:cursor-pointer m-4"
            >
              Wikipedia
            </button>
          )}

          {data?.capital && (
            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${encodeURIComponent(
                    data.capital
                  )}`,
                  "_blank"
                )
              }
              className="text-blue-600 underline hover:cursor-pointer mx-4"
            >
              Google
            </button>
          )}
        </div>
      </div>
      <div>
        <button
          className="mt-12 px-8 py-4 bg-cyan-600 hover:bg-cyan-800 font-semibold rounded-2xl shadow-lg transform transition hover:scale-105"
          onClick={fetchCountry}
        >
          Generate random country
        </button>
      </div>
    </div>
  );
}
