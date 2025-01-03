import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-5 items-center">
      <div>
        <h1 className="text-4xl font-semibold">Task Manager</h1>
      </div>
      <div className="flex gap-4 font-semibold text-xl">
        <h1>
          <Link to="/">task</Link>
        </h1>
        <h1>
          <Link to="users">user</Link>
        </h1>{" "}
      </div>
    </nav>
  );
}
