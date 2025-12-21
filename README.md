# 🇺🇳 Random Country & Capital Picker

A simple and interactive Next.js app that displays a random country and its capital, with quick links to Wikipedia and Google for further research.

Built using Next.js, TypeScript, and Tailwind CSS.

🚀 Features

🎲 Generates a random country + capital

🌍 Contains a dataset of all 195 countries

🔗 One-click access to:

Wikipedia (Country & Capital)

Google Search (Country & Capital)

🖼️ Responsive and clean UI using Tailwind CSS

⚡ Fast API route (/api/random) to fetch a random country

🛠️ Tech Stack

Next.js 14+

React

TypeScript

Tailwind CSS

📂 Project Structure
/app
  ├── page.tsx              # UI for the home page
  ├── api/random/route.ts   # API route returning random country data
  └── data/countries.ts     # List of all countries + capitals

▶️ Running the project locally
1. Install dependencies
npm install

2. Start the development server
npm run dev


Now visit:

http://localhost:3000

📡 API Endpoint
GET /api/random

Returns:

{
  "country": "Spain",
  "capital": "Madrid"
}

🧠 How it Works

The countries.ts file stores an array of all countries + their capitals.

The API randomly selects one using:

const random = countries[Math.floor(Math.random() * countries.length)];


The UI calls the API when the user clicks Generate Random Country

Wikipedia & Google buttons use:

https://en.wikipedia.org/wiki/COUNTRY
https://www.google.com/search?q=COUNTRY


Automatically encoded for names with spaces or punctuation.

🎨 UI Preview

✔ Balanced layout
✔ Clean typography
✔ Mobile responsive
✔ Buttons for quick research

🙌 Contributions

Feel free to submit issues or pull requests if you want to improve:

UI/UX

Extra data (flags, population, region, etc.)

Animations

More search sources

📄 License

MIT License — free to use, modify, and share.
