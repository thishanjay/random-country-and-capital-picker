"use client"
import { useState } from "react";

type CountryResponse = {
  country: string;
  capital: string;
  flag?: string;
}

export default function Home() {
  const [data, setData] = useState<CountryResponse | null>(null);

  async function fetchCountry() {
    const res = await fetch("api/random");
    const json = await res.json();
    setData(json);
  }

  return (
    <div className="p-30">
      <h1 className="text-7xl font-mono p-8">Random Country & Capital Picker</h1>
      <div className="flex gap-60">
        {/* Country */}
        <div className="flex items-center gap-4">
          <p className="p-8">Country: {data?.country || "---"}</p>

          {data?.country && (
            <button onClick={() => window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(data.country)}`, "_blank")} className="text-blue-600 underline hover:cursor-pointer">Wikipedia</button>
          )}

        </div>
        {/* Capital */}
        <div className="flex items-center gap-4">
          <p className="p-8">Capital: {data?.capital || "---"}</p>

          {data?.capital && (
            <button onClick={() => window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(data.capital)}`, "_blank")} className="text-blue-600 underline hover:cursor-pointer">Wikipedia</button>
          )}

        </div>
      </div>
      <div>
        <button className="m-8 p-4 bg-cyan-600 hover:cursor-pointer rounded-2xl hover:bg-cyan-700" onClick={fetchCountry}>Generate</button>
      </div>
    </div>
  );
}
