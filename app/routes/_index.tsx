import type { V2_MetaFunction } from "@remix-run/node";

import stylesUrl from "../styles/index.css";
import { LinksFunction } from "@remix-run/react/dist/routeModules";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Grafbase Hackathon" },
    { name: "description", content: "Ogame-like Remix App!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Grafbase Hackathon
        </h1>
        <p>Small Ogame-like app with Remix and Grafbase</p>
        <Link to="planets">Go to planets</Link>
      </div>
    </div>
  );
}
