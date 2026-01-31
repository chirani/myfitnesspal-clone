import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "../App.css";
import { authClient } from "../auth";
import { useLogout } from "../hooks/auth";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const Navbar = () => {
  const session = authClient.useSession();
  const isLogged = !!session.data?.user;
  const { mutate: logout } = useLogout();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          FoodTrackerOne
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          {!isLogged ? (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/foods/schedule/new">Daily Schedule</Link>
              </li>
              <li>
                <Link to="/foods/new">Add New Food</Link>
              </li>
              <li>
                <button onMouseDown={() => logout()}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
  beforeLoad: async () => {
    const res = await authClient.getSession();

    return { session: res?.data };
  },
});
