import Image from "next/image";

export default function Home() {
  return (
    <div className="p-30">
      <h1 className="text-7xl font-mono p-8">Random Country & Capital Picker</h1>
      <div className="flex gap-60">
        <p className="p-8">Country: Spain</p>
        <p className="p-8">Capital: Madrid</p>
      </div>
      <div>
        <button className="m-8 p-4 bg-cyan-600 hover:cursor-pointer rounded-2xl hover:bg-cyan-700">Generate</button>
      </div>
    </div>
  );
}
