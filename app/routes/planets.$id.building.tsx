import { redirect, type LoaderArgs, type LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getPlanet, upgradeMetalMine } from "~/models/planet.server";

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => params.id ? getPlanet(params.id) : { planet: null };

export const action = async ({ params }: LoaderArgs) => {
    if (params.id) {
        await upgradeMetalMine(params.id);
    }
    return redirect("/planets/" + params.id);
}

export default function Planet() {
    const { planet } = useLoaderData<typeof loader>();

    if (!planet) {
        return <div>Planet not found</div>;
    }

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">Buildings</h1>
            <Form method="post">
                <p>Metal mine level : {planet.metalMineLevel} <button type="submit">+</button></p>
            </Form>
            <p>Crystal mine level : {planet.crystalMineLevel}</p>
            <p>Deuterieum mine level : {planet.deuteriumMineLevel}</p>
        </div>
    );
}
