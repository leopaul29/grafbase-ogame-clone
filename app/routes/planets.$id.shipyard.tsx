import { redirect, type LoaderArgs, type LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getPlanet, createLightFighter } from "~/models/planet.server";

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => params.id ? getPlanet(params.id) : { planet: null };

export const action = async ({ request, params }: LoaderArgs) => {
    if (params.id) {
        const formData = await request.formData();
        const fleetId = formData.get("fleetId");
        const count = formData.get("count");
        if (typeof fleetId !== "string" || typeof count !== "string") {
            throw new Error("Form not submitted correctly")
        }

        await createLightFighter(fleetId, Number.parseInt(count));
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
            <h1 className="my-6 border-b-2 text-center text-3xl">Shipyard</h1>
            <Form method="post">
                <p>
                    <label>
                        Light Fighter ({planet.fleet.lightFighterCount}):{" "}
                    </label>
                    <input type="hidden" name="fleetId" value={planet.fleet.id} />
                    <input type="number" name="count" style={{ "width": 50 }} />
                    <button type="submit">create</button>
                </p>
            </Form>
        </div>
    );
}
