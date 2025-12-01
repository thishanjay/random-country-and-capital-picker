import { countries } from "@/data/countries";

export async function GET() {
    const random = countries[Math.floor(Math.random() * countries.length)];
    return Response.json(random);
}