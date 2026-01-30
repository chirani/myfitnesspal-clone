import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "../App.css";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const Route = createRootRoute({ component: RootLayout });
