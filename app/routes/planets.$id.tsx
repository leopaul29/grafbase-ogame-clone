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
            <div className="resources">
                <h3>resources</h3>
                <p>Metal: {planet.resources.metal}</p>
                <p>Crystal: {planet.resources.crystal}</p>
                <p>Deuterieum: {planet.resources.deuterium}</p>
            </div>
            <div className="building">
                <h3>Buildings</h3>
                <p>Metal mine level : {planet.metalMineLevel}</p>
                <p>Crystal mine level : {planet.crystalMineLevel}</p>
                <p>Deuterieum mine level : {planet.deuteriumMineLevel}</p>
            </div>
            <div className="fleet">
                <h3>Fleet</h3>
                <p>Light Fighter: {planet.fleet.lightFighterCount}</p>
            </div>
        </main>
    );
}
