
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getPlanets } from "~/models/planet.server";

export const loader = async () => getPlanets();

export default function Planets() {
    const { planets } = useLoaderData<typeof loader>();

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Planets</h1>
            <div className="grid grid-cols-4 gap-6">
                <nav className="col-span-4 md:col-span-1">
                    <ul>
                        {planets.data.planetCollection.edges.map((planet) => (
                            <li key={planet.node.id}>
                                <Link to={planet.node.id}
                                    className="text-blue-600 underline"
                                >
                                    {planet.node.name}
                                </Link>
                            </li>
                        ))}</ul>
                </nav>
                <main className="col-span-4 md:col-span-3">
                    <Outlet />
                </main>
            </div>
            <div className="footer">Photo de <a href="https://unsplash.com/fr/@dariobroe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dario Brönnimann</a> sur <a href="https://unsplash.com/fr/photos/hNQwIirOseE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </div>
    );
}
