import { Outlet } from "@remix-run/react";

export default function DashboardRoute() {
    return (
        <div>
            <h1>Dashboard</h1>
            <main>
                <Outlet />
            </main>
        </div>
    );
}