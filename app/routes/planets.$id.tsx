import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPlanet } from "~/models/planet.server";

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => params.id ? getPlanet(params.id) : { planet: null };

export default function Planet() {
    const { planet } = useLoaderData<typeof loader>();

    if (!planet) {
        return <div>Planet not found</div>;
    }

    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">
                Planète : {planet.name}
            </h1>
            <p>ID : {planet.id}</p>
            <p>Niveau de mine de métal : {planet.metalMineLevel}</p>
            <p>Niveau de mine de cristal : {planet.crystalMineLevel}</p>
        </main>
    );
}
