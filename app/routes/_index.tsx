import type { V2_MetaFunction } from "@remix-run/node";

import stylesUrl from "../styles/index.css";
import { LinksFunction } from "@remix-run/react/dist/routeModules";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="dashboard">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
