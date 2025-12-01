"use client"
import { useState } from "react";

type CountryResponse = {
  country: string;
  capital: string;
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
        <p className="p-8">Country: {data?.country || "---"}</p>
        <p className="p-8">Capital: {data?.capital || "---"}</p>
      </div>
      <div>
        <button className="m-8 p-4 bg-cyan-600 hover:cursor-pointer rounded-2xl hover:bg-cyan-700" onClick={fetchCountry}>Generate</button>
      </div>
    </div>
  );
}
